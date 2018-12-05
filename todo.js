const Controller = require('./controller/Controller.js')

const argv = process.argv.slice(2)

switch (argv[0]) {
    case 'help':
        Controller.help()        
        break;

    case 'list':
        Controller.list()
        break;
    
    case 'add':
        Controller.add(argv[1])
        break;

    case 'findById':
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
        
    default:
        Controller.help()
        break;
}