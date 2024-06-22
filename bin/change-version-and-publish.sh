#!/usr/bin/env bash

SCRIPT_DIR="$(dirname "$(readlink -f "$BASH_SOURCE")")"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

set -e

VERSION="$1"
if egrep '^[0-9]+\.[0-9]+\.[0-9]+' <<< "$VERSION" > /dev/null 2>&1
then
    n=${VERSION//[!0-9]/ }
    a=(${n//\./ })
    MAJOR_VERSION=${a[0]}
    MINOR_VERSION=${a[1]}
    PATCH_VERSION=${a[2]}
else
    echo "Usage: change-version-and-publish.sh <version>"
    exit 1
fi

# Make sure the working directory is clear.
if [[ ! -z "$(git status --porcelain)" ]]
then
    echo "Your working directory is dirty. Did you forget to commit your changes?"
    exit 1
fi

cd "$PROJECT_DIR/playground/wizard"
npm --no-git-tag-version --allow-same-version version $VERSION

cd "$PROJECT_DIR/playground/sandbox"
npm --no-git-tag-version --allow-same-version version $VERSION

cd "$PROJECT_DIR/packages/maplibre-theme"
npm --no-git-tag-version --allow-same-version version $VERSION

pnpm build

cd "$PROJECT_DIR"

git add .
git commit -m "change maplibre-theme version $VERSION"

git tag -a $VERSION -m $VERSION

git push origin

cd "$PROJECT_DIR/packages/maplibre-theme/dist"

pnpm publish

