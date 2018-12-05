const Controller = require(`./Controllers/Controller`)

const argv = process.argv.slice(2)
const action = argv[0]
const options = argv.slice(1)
const command = action.split(`:`)
const type = options
console.clear()

switch (command[0]) {
    case `list`:
        Controller.list(command[0], command[1], options[0])
        break;

    case `add`:
        Controller.add(options[0], options.slice(1))
        break;

    case `findById`:
        Controller.findById(options[0])
        break;

    case `delete`:
        Controller.delete(options[0])
        break;

    case `complete`:
        Controller.complete(options[0])
        break;

    case `uncomplete`:
        Controller.uncomplete(options[0])
        break;

    case `help`:
        Controller.help()
        break;

    case `filter`:
        Controller.filter(command[1])
        break;

    default:
        Controller.help()
        break;
}





