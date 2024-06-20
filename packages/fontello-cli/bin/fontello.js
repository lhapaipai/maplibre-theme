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
import open from "open";
import { rimrafSync } from "rimraf";
import FormData from "form-data";
import prompts from "prompts";
import axios from "axios";
import extractZip from "extract-zip";
import { cwd } from "node:process";
import { program } from "commander";
var projectDir = cwd();
var tmpDir = resolve(projectDir, "tmp");
var fontelloHost = "https://fontello.com";
program.option(
  "-c, --config <config>",
  "JSON file with fontello configuration",
  "config.json"
);
program.parse();
var options = program.opts();
var configFile = resolve(projectDir, options.config);
if (!existsSync(configFile)) {
  console.log(`${configFile} doesn't exists for this theme`);
  process.exit(0);
}
var configDir = dirname(configFile);
var { action } = await prompts([
  {
    message: "Which action do you want ?",
    type: "select",
    name: "action",
    choices: [
      { title: "Open Fontello in your Browser", value: "open" },
      { title: "Save your font in your local system", value: "save" }
    ]
  }
]);
var generatedDir = resolve(configDir, "generated");
var idFile = resolve(configDir, ".fontello");
var cssFile = resolve(configDir, "fontello.css");
switch (action) {
  case "open": {
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
      console.log(
        `${idFile} doesn't exists open fontello in your browser before saving`
      );
      break;
    }
    const id = readFileSync(idFile, { encoding: "utf-8" });
    const zipFile = resolve(tmpDir, "fontello.zip");
    await downloadFile(`${fontelloHost}/${id}/get`, zipFile);
    await extractZip(zipFile, { dir: tmpDir });
    const files = readdirSync(tmpDir, { encoding: "utf-8" });
    const fontelloDirname = files.find(
      (fileName) => fileName.startsWith("fontello-")
    );
    const zipContentDir = resolve(tmpDir, fontelloDirname);
    copyFileSync(resolve(zipContentDir, "config.json"), configFile);
    cpSync(resolve(zipContentDir, "font"), generatedDir, { recursive: true });
    let cssContent = readFileSync(resolve(zipContentDir, "css/fontello.css"), {
      encoding: "utf-8"
    });
    cssContent = cssContent.replaceAll(
      "../font/fontello",
      "./generated/fontello"
    );
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
