const program = require("commander");
const pkg = require("../package.json");
const Promise = require("bluebird");
const fs = Promise.promisifyAll(require("fs"));
const ncp = Promise.promisifyAll(require("ncp"));
const path = require("path");
program
  .version(pkg.version)
  .option("-c, --controller <name>", "Controller name", "none")
  .option("-n, --moduleName <name>", "Module name", "none")
  .usage("[options] <path>")
  .parse(process.argv);

if (program.moduleName === "none" || program.controller === "none") {
  program.outputHelp();
  process.exit(0);
}

const referencePath = path.resolve("src", "modules", "Reference");
const modulePath = path.resolve("src", "modules", program.moduleName);
const modulePathRelative = './src/modules/'
const launch = async function() {
  await ncp.ncpAsync(referencePath, modulePath);
  await fs.renameAsync(
    path.join(modulePath, "controller.js"),
    path.join(modulePath, `${program.controller}.js`)
  );
  await fs.renameAsync(
    path.join(modulePath, "view.html"),
    path.join(modulePath, `${program.moduleName}.html`)
  );
  const files = await fs.readdirAsync(modulePath);
  const filesToReplace = files.map(async file => {
    const newContent = await fs
      .readFileAsync(path.resolve(modulePath, file), "utf8")
      .then(fileContent => {
        fileContent = replaceAll(
          fileContent,
          "{{Controller}}",
          program.controller
        );
        fileContent = replaceAll(
          fileContent,
          "{{ModuleName}}",
          program.moduleName
        );
        return fileContent;
      });
    await fs.writeFileAsync(path.join(modulePath, file), newContent)
  });
  await fs.appendFileAsync(path.join('src','app.js'), `const ${program.moduleName} = require('${modulePathRelative}${program.moduleName}/app');`)
  await fs.appendFileAsync(path.join('src','app.js'), `${program.moduleName}.init(ang); \n`)
};

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

launch().then(_=>{
    console.log('done !')
}).catch(err => {
  console.log(err);
});
