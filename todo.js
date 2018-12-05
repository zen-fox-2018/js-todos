const argv = process.argv.slice(2)
const ToDoController = require('./toDoController.js')
const command = argv[0]
const task_id = argv[1]
// const sortAs = argv[2]
// console.log(sortAs)

switch (command) {
    case 'help':
        ToDoController.helpArgv()
        break;
    case 'list':
        ToDoController.showList()
        break;
    case 'add':
        ToDoController.addList(task_id)
        break;
    case 'findById':
        ToDoController.findById(task_id)
        break;
    case 'delete':
        ToDoController.deleteTask(task_id)
        break;
    case 'complete':
        ToDoController.completedTask(task_id)
        break;
    case 'uncomplete':
        ToDoController.uncompletedTask(task_id)
        break;
    case 'list:created':
        ToDoController.sortByDate(task_id)
        break;
    // case 'list:completed':
    //     ToDoController.uncompletedTask(task_id)
    //     break;
    default:
        ToDoController.helpArgv()
        break;
}

