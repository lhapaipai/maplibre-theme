#!/usr/bin/env node

// src/fontello.ts
import {
  copyFileSync,
  cpSync,
  createReadStream,
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync
} from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import open from "open";
import { rimrafSync } from "rimraf";
import FormData from "form-data";
import prompts from "prompts";
import axios from "axios";
import extractZip from "extract-zip";
var projectDir = dirname(dirname(fileURLToPath(import.meta.url)));
var iconsDir = resolve(projectDir, "src/icons");
var tmpDir = resolve(projectDir, "tmp");
var fontelloHost = "https://fontello.com";
var { action, iconSet } = await prompts([
  {
    message: "Which action do you want ?",
    type: "select",
    name: "action",
    choices: [
      { title: "Open Fontello in your Browser", value: "open" },
      { title: "Save your font in your local system", value: "save" }
    ]
  },
  {
    message: "Which icon set?",
    type: "select",
    name: "iconSet",
    choices: readdirSync(iconsDir, { encoding: "utf-8" }).map((dirname2) => ({
      title: dirname2,
      value: dirname2
    }))
  }
]);
var iconSetDir = resolve(iconsDir, iconSet);
var configFile = resolve(iconSetDir, "config.json");
var generatedDir = resolve(iconSetDir, "generated");
var idFile = resolve(iconSetDir, ".fontello");
var cssFile = resolve(iconSetDir, "codes.css");
switch (action) {
  case "open": {
    if (!existsSync(configFile)) {
      console.log(`${configFile} doesn't exists for this theme`);
      break;
    }
    const payload = new FormData();
    payload.append("config", createReadStream(configFile));
    const res = await axios({
      method: "POST",
      url: fontelloHost,
      data: payload,
      headers: payload.getHeaders()
    });
    const id = res.data;
    writeFileSync(idFile, id, { encoding: "utf-8" });
    const url = `${fontelloHost}/${id}`;
    open(url);
    console.log(
      `Your browser should open itself, otherwise you can open the following URL manually: ${url}`
    );
    break;
  }
  case "save": {
    existsSync(tmpDir) && rimrafSync(tmpDir);
    mkdirSync(tmpDir, { recursive: true });
    existsSync(generatedDir) && rimrafSync(generatedDir);
    if (!existsSync(idFile)) {
      console.log(`${idFile} doesn't exists open fontello in your browser before saving`);
      break;
    }
    const id = readFileSync(idFile, { encoding: "utf-8" });
    const zipFile = resolve(tmpDir, "fontello.zip");
    await downloadFile(`${fontelloHost}/${id}/get`, zipFile);
    await extractZip(zipFile, { dir: tmpDir });
    const files = readdirSync(tmpDir, { encoding: "utf-8" });
    const fontelloDirname = files.find((fileName) => fileName.startsWith("fontello-"));
    const zipContentDir = resolve(tmpDir, fontelloDirname);
    copyFileSync(resolve(zipContentDir, "config.json"), configFile);
    cpSync(resolve(zipContentDir, "font"), generatedDir, { recursive: true });
    const cssContent = readFileSync(resolve(zipContentDir, "css/fontello.css"), {
      encoding: "utf-8"
    });
    writeFileSync(cssFile, cssContent, { encoding: "utf-8" });
    rimrafSync(tmpDir);
    break;
  }
}
async function downloadFile(url, dstFile) {
  return new Promise((resolve2, reject) => {
    axios({
      method: "GET",
      url,
      responseType: "stream"
    }).then((res) => {
      if (res.status !== 200) {
        reject(new Error(`error get: ${url}: ${res.status}`));
      }
      const stream = createWriteStream(dstFile);
      stream.on("close", () => {
        resolve2(true);
      });
      res.data.pipe(stream);
      res.data.on("end", () => {
        stream.close();
      });
    }).catch((err) => {
      reject(err);
    });
  });
}
