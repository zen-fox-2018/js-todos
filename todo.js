const argv = process.argv.slice(2)
const TodoController = require ('./TodoController.js')

switch (argv[0]) {
    case 'list':
        TodoController.showList()
        break;
    case 'help':
        TodoController.showHelp()
        break;
    case 'add':
        TodoController.addList(argv[1])
        break;
    case 'findById':
        TodoController.findById(argv[1])
        break;
    case 'delete':
        TodoController.deleteById(argv[1])
        break;
    case 'complete':
        TodoController.completedById(argv[1])
        break;
    case 'uncomplete':
        TodoController.uncompletedById(argv[1])
        break;
    case 'list:created':
        TodoController.sortingByCreated(argv[1])
        break;
    default:
        break;
}
