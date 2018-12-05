const Model = require('./Model.js')
const View = require('./View.js')

class Controller {
  static help() {
    View.showHelp()
  }

  static list() {
    let list = Model.findAll()
    View.dataView(list)
  }

  static add(task) {
    Model.addTask(task)
    let data = Model.findAll()
    View.successAddTask(data)
  }

  static findById(id) {
    let data = Model.findOne(Number(id))
    View.dataById(Number(id), data)
  }

  static delete(id) {
    let dataDelete = Model.findOne(Number(id))
    dataDelete.delete()
    View.successDeleteTask(dataDelete)
  }

  static togglecomplete(id) {
    let completeData = Model.findOne(Number(id))
    completeData.togglecomplete()
    if (completeData.status) {
      View.complete(id)
    }
    else {
      View.uncomplete(id)
    }
  }
  static sortlist(sort) {
    let data = Model.sortList(sort)
    View.dataView(data)
  }

  static sortcompleted(sort) {
    let data = Model.sortcompleted(sort)
    View.dataView(data)
  }

  static tag(id, arr) {
    let data = Model.findOne(Number(id))
    data.tag(arr)
    View.successAddTags(data, arr)
  }

  static filter(filter) {
    let data = Model.filter(filter)
    View.filterData(data)

  }
}

module.exports = Controller