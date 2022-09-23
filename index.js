const userInfo = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: ` Hello ${userInfo.info.name} from ${userInfo.info.campus}`,
    e: "Oo",
    T: "U"
}));