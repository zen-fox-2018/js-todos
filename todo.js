const Controller = require('./controller.js');

let processArgv = process.argv;
let command = processArgv.slice(2);

switch (command[0]) {
  case 'help':
    Controller.displayHelp();
    break;
  case 'list':
    Controller.showList();
    break;
  case 'add':
    Controller.addList(command[1]);
    break;
  case 'findById':
    Controller.findById(command[1]);
    break;
  case 'delete':
    Controller.deleteIndex(command[1]);
    break;
  case 'complete':

    break;
  case 'uncomplete':

    break;
  default:
}
