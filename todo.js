const argv = process.argv.slice(2)
const Controller = require('./controller.js')

const command = argv[0]
const input = argv[1]

switch (command) {
    case 'help':
        Controller.controlHelp()
        break;

    case 'list':
        Controller.controlList()
        break;

    case 'add':
        Controller.controlAdd(input)
        break;

    case 'findById':
        Controller.controlFindID(input)
        break;

    case 'delete':
        Controller.controlDelete(input)
        break;

    default:
        Controller.whenUndefined()
        break;
}


