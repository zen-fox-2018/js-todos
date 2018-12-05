const ModelToDo = require('./modelToDo.js')
const ViewToDo = require('./viewToDo.js')

class ToDoController {
    static helpArgv() {
        ViewToDo.argvHelp(ModelToDo.readHelp())
    }
    static showList() {
        let allTheList = ModelToDo.fileOperation()
        ViewToDo.lists(allTheList)
    }
    static addList(input) {
        ModelToDo.addingList(input)
        ViewToDo.toDoAdded(input)
    }
    static findById(task) {
        let data = ModelToDo.fileOperation()
        ViewToDo.showById(task, data)
    }
    static deleteTask(id) {
        ModelToDo.deleteTask(id)
        ViewToDo.deleteTask(id)
    }
    static completedTask(id) {
        ModelToDo.completedTask(id)
        ViewToDo.completedTask(id)
    }
    static uncompletedTask(id) {
        ModelToDo.uncompletedTask(id)
        ViewToDo.uncompletedTask(id)
    }
    static sortByDate(sortAs) {
        let data = ModelToDo.fileOperation()
        ViewToDo.sortByDate(data, sortAs)
    }
}

module.exports = ToDoController