
const argv = process.argv.slice(2)
const Controller = require('./Controller.js')

let command = argv[0]
let options = argv[1]

if (command.match("filter:")) {
  options = command.split(':')[1]
  command = "filter"
}

switch (command) {
  case "help":
    Controller.help()
    break;
  case "list":
    Controller.list()
    break;
  case "add":
    Controller.add(options)
    break;
  case "findById":
    Controller.findById(options)
    break;
  case "delete":
    Controller.delete(options)
    break;
  case "complete":
    Controller.togglecomplete(options)
    break
  case "uncomplete":
    Controller.togglecomplete(options)
    break;
  case "list:created":
    Controller.sortlist(options)
    break;
  case "list:completed":
    Controller.sortcompleted(options)
    break;
  case "tag":
    Controller.tag(options, argv.slice(2))
    break;
  case "filter":
    Controller.filter(options)
    break;
  default: Controller.help()

}