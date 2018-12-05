const Controller = require('./Controller.js')

const argv = process.argv.slice(2)

switch(argv[0]) {
  case undefined :
    Controller.menuHelp()
    break;
  case 'help':
    Controller.menuHelp()
    break;
  case 'list':
    Controller.menuList()
    break;
  case 'list:created':
    if (argv[1] === undefined){
      Controller.menuList()
    } else if (argv[1] === 'asc' || argv[1] === 'dsc') {
      Controller.menuList(argv[1], 'created_date')
    } else {
      Controller.menuHelp()
    }
    break;
  case 'list:completed':
    if (argv[1] === undefined){
      Controller.menuList('asc', 'done_date')
    } else if (argv[1] === 'asc' || argv[1] === 'dsc') {
      Controller.menuList(argv[1], 'done_date')
    } else {
      Controller.menuHelp()
    }
    break;
  case 'tag' :
    Controller.menuTag(argv[1], argv[2])
    break;
  case 'add' :
    Controller.menuAdd(argv[1])
    break;
  case 'findById':
    Controller.menuFindById(argv[1])
    break;
  case 'delete' :
    Controller.menuDelete(argv[1])
    break;
  case 'complete' :
    Controller.menuComplete(argv[1], true)
    break;
  case 'uncomplete' :
    Controller.menuComplete(argv[1], false)
    break;
  default:
    if (argv[0].search('filter:') !== -1) {
      Controller.menuFilter(argv[0])
      // console.log(argv[0]);
      break
    }
    Controller.menuHelp()
    break;
}
