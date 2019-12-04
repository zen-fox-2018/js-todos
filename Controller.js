const Task = require('./Model')
const View = require('./View')

class Controller {
  static execute(input) {
    let command = input[0]
    let option = input.slice(1)
    if (command){
      if (command.split(':') !== undefined ) {
        command = command.split(':')[0]
      } 
    } 
    switch (command) {
      case 'help': Controller.help(); break;
      case 'list': Controller.list(input[0].split(':')[1],option); break;
      case 'add': Controller.add(option.join(' ')); break;
      case 'findById': Controller.find(option); break;
      case 'delete': Controller.delete(option); break;
      case 'complete': Controller.setCom(option, command); break;
      case 'uncomplete': Controller.setCom(option, command); break;
      case 'tag': Controller.tag(option); break;
      case 'filter': Controller.filter(input[0].split(':')[1]); break;
      default: Controller.help(); break;
    }
  }

  static list(com , option) {
    let data = Task.getAll() 
    if (com == undefined || (option == 'asc' && com == 'created') || option == null) {
      View.list(data)
    } else if (com == 'created' && option == 'desc') {
      View.createDesc(data)
    } else if (com == 'completed') {
      data = Task.sortByComp(data , option)
      View.list(data)
    } else {
      View.display(`Error there is no such command`)
    }
  }

  static add(option) {
    let data = new Task(null,option)
    data.add()
    View.display(`Added "${option}" to your TODO list....`)
  }

  static find(id) {
   let data = Task.find(id)
   if (data == '') {
     View.display(`There is no data with id: ${id}`)
  } else {
    View.list(data)
   }
  }

  static delete(id) {
    let data = Task.delete(id)
    if (data == '') {
      View.display(`There is no data with id : ${id}` , )
    } else {
      View.display(`Deleted "${data}" from your ToDo list!`)
    }
  }

  static setCom(id, command) {
    let status;
    if (command == 'complete') {
      status = true
    } else {
      status = false
    }
    let data = Task.setCom(id, status)
    if (data) {
      Controller.list()
    } else {
      View.display(`There is no data with id : ${id}` , )
    }
  }

  static tag(option) {
    let data = Task.tag(option[0] , option.slice(1))
    if(data) {
      View.display(`Tagged task "${data.task}" with tags:`, data.tag)
    } else {
      View.display(`There is no data!`  )
    }
  }

  static filter(tag) {
    let data = Task.filter(tag)
    if(data) {
      View.display(`${data.id}. ${data.task} :`, data.tag)
    } else {
      View.display(`There is no data with tag : ${tag}` , )
    }
  }
  
  static help() {
    View.help()
  }

}

module.exports = Controller