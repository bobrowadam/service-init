const scriptName = process.argv[2] || process.exit(1);
const modulePath = `${process.cwd()}/${scriptName}`;
console.log('requiring module from: ', modulePath);
require(modulePath);
console.log('requiring module done');

