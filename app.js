const identity = require('./identity');
const {username,password} = require('./validate');

console.log(identity);
console.log(username('rival123'));
console.log(password('inipassword'));