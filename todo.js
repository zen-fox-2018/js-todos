
const args = process.argv.slice(2);
const Controller = require("./Controllers/controller.js")
const options = args[0];

switch (options) {
    case "help":
        Controller.willCallHelp()
        break;
    case "list":
        Controller.list()
        break;
    case "add":
        Controller.add(args[1])
        break;
    case "findById":
        Controller.findById(Number(args[1]))
        break;
    case "delete":
        Controller.delete(args[1])
        break;
    case "completed":
    case "uncompleted":
    // case "completed all":
        Controller.completed(args[0], args[1])
        break;
    default:
        break;
}
