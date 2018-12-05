const argv = process.argv.slice(2)
const ToDoController = require('./Controllers/ToDoController')
const list = argv[0].split(":")
const option = argv.slice(1)
switch (list[0]) {
    case "help":
        ToDoController.help()
        break;
    case "list":
        ToDoController.getList(list,option)
        break;
    case "add":
        ToDoController.addTask(option.join(" "))
        break;
    case "findById":
        ToDoController.findById(option[0])
        break;
    case "delete": 
        ToDoController.deleteTask(option[0])
        break;
    case "complete":
        console.log(argv)
        ToDoController.Complete(argv)
        break;
    case "uncomplete":
        ToDoController.Complete(argv)
        break;
    case "tag":
        ToDoController.addTag(option)
        break;
    case "filter":
        ToDoController.filter(list)
        break;
    default: ToDoController.help()
        break;
}
