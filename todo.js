const argv = process.argv.slice(2)
const Controller = require("./controller.js")



switch (argv[0]) {
    case 'help': Controller.showHelp()
        break
    case 'list' : Controller.list()
        break
    case 'add' : Controller.add(argv[1])
        break
    case 'findById' : Controller.findById(argv[1])
        break
    case 'delete' : Controller.delete(argv[1])
        break
    case 'complete' : console.log('wait')
        break
    case 'uncomplete' : console.log('wait')
    default: Controller.showHelp()
        break;
}

