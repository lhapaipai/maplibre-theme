import { execSync } from "child_process";
import { readdirSync } from "node:fs";
import { cwd } from "process";
import { resolve } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const projectDir = dirname(dirname(fileURLToPath(import.meta.url)));

const pluginsDir = resolve(projectDir, "src/plugins");
const themesDir = resolve(projectDir, "src/themes");
const iconsDir = resolve(projectDir, "src/icons");

const [env, action, ctx] = process.argv.slice(2);

const ctxArr = ctx?.split(",") || [];

const isScoped = ctxArr.includes("scoped");
const isCompat = ctxArr.includes("compat");
const isDebug = ctxArr.includes("debug");

const argts = [];
const sources = [];

if (env === "dev") {
  argts.push("--watch");
}

switch (action) {
  case "plugins": {
    argts.push("-d", "dist/plugins");
    readdirSync(pluginsDir).map((filename) => {
      sources.push(resolve(pluginsDir, filename));
    });
    break;
  }
  case "themes": {
    argts.push("-d", isScoped || isCompat ? "dist/extra" : "dist");
    readdirSync(themesDir).map((themeDir) => {
      sources.push(resolve(themesDir, `${themeDir}/${themeDir}.css`));
    });
    break;
  }
  case "icons": {
    argts.push("-d", "dist");
    readdirSync(iconsDir).map((iconSet) => {
      sources.push(resolve(iconsDir, `${iconSet}/icons.${iconSet}.css`));
    });
    break;
  }
}

let exts = [];
isScoped && exts.push("scoped");
isCompat && exts.push("compat");

if (exts.length > 0) {
  argts.push("--ext", `.${exts.join(".")}.css`);
}

const postcssCtx = [...ctxArr];
if (action !== "plugins" && !isDebug) {
  postcssCtx.push("minify");
}

if (postcssCtx.length > 0) {
  argts.push("--env", postcssCtx.join(","));
}

const command = `pnpm exec postcss ${argts.join(" ")} ${sources.join(" ")}`;
console.log(command);

execSync(command, { encoding: "utf-8" });
