import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
const projectDir = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(projectDir, "../..");
const pkgInfos = JSON.parse(
  readFileSync(resolve(projectDir, "package.json"), "utf-8")
);

pkgInfos.name = "maplibre-theme";
delete pkgInfos.private;
delete pkgInfos.devDependencies;
delete pkgInfos.scripts;

writeFileSync(
  resolve(projectDir, "dist/package.json"),
  JSON.stringify(pkgInfos, undefined, 2)
);

copyFileSync(
  resolve(rootDir, "README.md"),
  resolve(projectDir, "dist/README.md")
);
