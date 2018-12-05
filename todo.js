//INDEX cuma panggil CONTROLLER

const argv = process.argv.slice(2);
// console.log(argv[1]);
const Controller = require('./controller.js');

switch (argv[0]) {
  case 'help':
    Controller.askHelp();
    break;
  case 'list':
    Controller.listToDo();
    break;
  case 'add':
    Controller.addToDo(argv[1]);
    break;
  case 'findById':
    Controller.findId(argv[1]);
    break;
  case 'delete':
    Controller.deleteTask(argv[1]);
    break;
  case 'complete':
    Controller.completedTask(argv[1]);
    break;
  case 'uncomplete':
    Controller.uncompletedTask(argv[1]);
    break;
  case 'list:created':
    Controller.sortTaskListByDate(argv[1]);
    break;

  default:
    Controller.askHelp();
    break;
}

// console.log(new Date().toLocaleDateString());
