const argv = process.argv.slice(2);
const Controller = require('./controller.js')

const todo = new Controller();

switch (argv[0]) {
    case 'help':
        Controller.Help();
        break;
    case 'list':
        Controller.Task();
        break;
    case 'add':
        Controller.Add(argv[1]);
        break;
    default:
        break;
}