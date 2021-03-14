var a = {prop1:1}
module.exports = a
var result1 = require('./commonjs-entry')
console.log(result1);
a.prop2 = 12
