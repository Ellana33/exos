const obj = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${obj.name} from ${obj.campus} campus!`,
    e : "oO",
    T : "U "
}));