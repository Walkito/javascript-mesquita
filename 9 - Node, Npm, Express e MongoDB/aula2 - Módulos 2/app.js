const mod = require('./B/C/D/mod1');
const path = require('path');

console.log(mod(2, 2));

console.log(__filename);
console.log(__dirname);

console.log(path.resolve(
    __dirname, '..', '..'
));