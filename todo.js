
const arrInput = process.argv.slice(2)
const TodoController = require('./TodoController.js')


let strInput  = arrInput[0]
let content = arrInput[1]


switch(strInput){
    case undefined:
        TodoController.noCommand()
        break;
    case "help": 
        TodoController.helpCommand()
        break;
    case 'list':
        TodoController.listCommand()
        break;
    case "add":
        TodoController.addComand(content)
        break;
    case "findById":
        TodoController.findByIdCommand(content)
        break;
    case "delete":
        TodoController.deleteCommand(content)
        break;
    case "complete":
        TodoController.completeCommand(content)
        break;
    case "uncomplete":
        TodoController.uncompleteCommand(content)
        break;
    case "list:created":

        break;
    case "list:completed":

        break;
    case "tag":

        break;
    case "filter":

        break;
}   