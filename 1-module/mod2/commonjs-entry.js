// 直接在nodejs中执行这个文件
var b = {f:12}
module.exports = b
var commonjs1 = require('./commonjs-1')
console.log(commonjs1);
b.name = 1
console.log(b);
