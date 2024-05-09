const path = require("path");

console.log(__dirname);
console.log(path.basename(__dirname));

console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.join('assets','imagas','abc.png'));
console.log(path.join(__filename,'assets','imagas','abc.png'));

console.log(path.resolve('src','assets','imagas','abc.png'));

console.log(path.parse(__filename).name);