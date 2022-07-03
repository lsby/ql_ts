#!/usr/bin/env node

var exec = require("@lsby/exec_cmd").default;
var path = require("path");

async function main() {
  var 命令所在目录 = process.cwd();
  var 临时目录 = path.resolve(命令所在目录, "tmp_ql_ts");
  await exec(`mkdir ${临时目录}`);
  await exec(
    `git clone --depth 1 https://github.com/lsby/Template_Typescript.git ${临时目录}`
  );
  await exec(`rm -rf ${临时目录}/.git`);
  await exec(`mv ${临时目录}/{.[!.],}* ${命令所在目录}/`);
  await exec(`rm -rf ${临时目录}`);
  console.log("安装npm依赖:", "npm i");
  console.log("监视编译:", "F1 -> 运行任务 -> watch:ts");
  console.log("运行服务:", "dev:service");
  console.log("更多命令请看package.json");
}
main();
