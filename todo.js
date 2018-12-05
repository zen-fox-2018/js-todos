const argv = process.argv.slice(2)
const Controller = require('./controller/TodoController')

let command = argv[0].split(':')

switch (command[0]) {
    case 'help':
        Controller.help()
        break;

    case 'list':
        if (command[1] === undefined) {
            Controller.list()
        } else if (command[1] === 'created') {
            Controller.created(argv[1])
        } else if (command[1] === 'completed') {
            Controller.completed(argv[1])
        }
        break;

    case 'add':
        // let task = argv[1]
        Controller.add(argv[1])
        break;

    case 'findById':
        // let id = argv[1]
        Controller.findById(argv[1])
        break;

    case 'delete':
        Controller.delete(argv[1])    
        break;

    case 'complete':
        Controller.complete(argv[1])
        break;

    case 'uncomplete':
        Controller.uncomplete(argv[1])
        break;
    
    case 'tag':
        Controller.addTag(argv[1], argv.slice(2))
        break;

    case 'filter':
        Controller.filterTag(command[1])
        break;
        
    default:
        Controller.help()
        break;
}
