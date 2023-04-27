const {execSync} = require('child_process')
console.log('first',process.env.installMode)
if (
  process.env.installMode &&
  (process.env.installMode == "multi" || process.env.installMode == "m")
) {
  // execSync("npm run install-multi");
  
} else {
  // execSync("npm run install-single");
}
execSync("echo done")
