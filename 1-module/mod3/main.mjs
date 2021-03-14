import baz from './a.js';
import * as bar from './a.js';
console.log(baz);  // { foo: 1 }
console.log(bar);  // { default: { foo: 1 } }

