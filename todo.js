let command = process.argv.slice(2);
const Controller = require("./Controller.js");

Controller.commands(command[0], command[1]);


