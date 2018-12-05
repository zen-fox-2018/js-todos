
const View = require("./view.js")
const Todo = require("./model.js")
class Controller {
    static showHelp () {
        let data = View.callHelp()
        return data
    }

    static list() {
        let showList = Todo.showList()
        View.showList(showList)
        return showList
    }

    static add (input) { //inputnya kan kata kata nya trus di bikin objek baru
        let inputData = new Todo (input)
        Todo.addTask(inputData)
    }

    static findById (input) {
        let data = Todo.showList()
        View.findById(data, input)
    }

    static delete (input) {
        let data = Todo(input)
        View

    }

    

}
module.exports = Controller