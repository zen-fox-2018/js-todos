const Model = require('./Model')
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
      case 'complete': Controller.setCom(option); break;
      case 'uncomplete': Controller.setCom(option); break;
      case 'tag': Controller.tag(option); break;
      case 'filter': Controller.filter(input[0].split(':')[1]); break;
      default: Controller.help(); break;
    }
  }

  static list(com , option) {
    let data = Model.getAll() 
    if (com == undefined || (option == 'asc' && com == 'created') || option == null) {
      View.list(data)
    } else if (com == 'created' && option == 'desc') {
      View.createDesc(data)
    } else if (com == 'completed') {
      View.complist(data , option)
    } else {
      View.display(`Error there is no such command`)
    }
  }

  static add(option) {
    let data = new Model(null,option)
    data.add()
    View.display(`Added "${option}" to your TODO list....`)
  }

  static find(id) {
   let data = Model.find(id)
    View.list(data)
  }

  static delete(id) {
    let data = Model.delete(id)
    if (data) {
      View.display(`Deleted "${data}" from your ToDo list!`)
    } else {
      View.display(`There is no data with id : ${id}` , )
    }
  }

  static setCom(id) {
    Model.setCom(id)
    Controller.list()
  }

  static tag(option) {
    let data = Model.tag(option[0] , option.slice(1))
    if(data) {
      View.display(`Tagged task "${data.task}" with tags:`, data.tag)
    }
  }

  static filter(tag) {
    let data = Model.filter(tag)
    View.display(`${data.id}. ${data.task} :`, data.tag)
  }
  
  static help() {
    View.help()
  }

}

module.exports = Controller