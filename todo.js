const TodoContoller = require('./TodoController.js');
const argv = process.argv.slice(2);

switch (argv[0]) {
  case undefined:
    TodoContoller.help();
    break;
  case 'help':
    TodoContoller.help();
    break;
  case 'find':
    TodoContoller.findAll();
    break;
  case 'list':
    TodoContoller.listTask();
    break;
  case 'add':
    TodoContoller.addTask(argv[1]);
    break;
  case 'findById':
    TodoContoller.findById(argv[1]);
    break;
  case 'delete':
    TodoContoller.deleteTask(argv[1]);
    break;
  case 'complete':
    TodoContoller.completedTask(argv[1], true);
    break;
  case 'uncomplete':
    TodoContoller.completedTask(argv[1], false);
    break;
  case 'list:created':
    TodoContoller.sortingTask('created_at', argv[1]);
    break;
  case 'list:completed':
    TodoContoller.sortingTask('completed_at', argv[1]);
    break;
  case 'tag':
    TodoContoller.addTag(argv[1], argv.slice(2));
    break;
  case 'filter':
    TodoContoller.filterTag(argv[1]);
    break;
  default:

}
