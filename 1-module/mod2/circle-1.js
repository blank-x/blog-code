// es6 循环引用
import {bar} from './circle-2.js';
console.log('a.js');
console.log(bar);
export var foo = 'foo';
