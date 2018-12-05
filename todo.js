const argv = process.argv.slice(2)
const ToDoController  = require('./todoController.js')

let display = null

switch (argv[0]){
    case 'help': 
        display = ToDoController.help()
        break;
    case 'list':
        display =ToDoController.list()
        break;
    case 'add':
        display = ToDoController.add(argv[1])
        break;
    case 'findById':
        display = ToDoController.FindById(argv[1])
        break;
    case 'delete':
        display = ToDoController.delete(argv[1])
        break;
    case 'complete':
        display = ToDoController.complete(argv[1])
        break;
    case 'uncomplete':
        display = ToDoController.uncomplete(argv[1])
        break;
    case 'list:created':
        display = ToDoController.listCreated(argv[1])
        break;
    case 'list:completed':
        display = ToDoController.listCompleted(argv[1])
        break;
    case 'tag':
        display = ToDoController.tag(argv)
        break;
}

display

// console.log(ToDoController.getData())


