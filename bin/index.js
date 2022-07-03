#!/usr/bin/env node

var exec = require("@lsby/exec_cmd").default;

async function main() {
  var 命令所在目录 = process.cwd();
  await exec(
    `git clone --depth 1 https://github.com/lsby/Template_Typescript.git ${命令所在目录}`
  );
  await exec(`rm -rf .git`);
  console.log("安装npm依赖:", "npm i");
  console.log("监视编译:", "F1 -> 运行任务 -> watch:ts");
  console.log("运行服务:", "dev:service");
  console.log("更多命令请看package.json");
}
main();
