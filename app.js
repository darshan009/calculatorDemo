var calController = require('./app/calController');

var add = calController.add(5, 2);
var sub = calController.sub(5, 2);
var mul = calController.multiply(5, 2);
var div = calController.divide(5, 2);

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
