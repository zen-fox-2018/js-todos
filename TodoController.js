const View = require('./View.js')
const Model = require('./Model.js')

class TodoController {
    static noCommand() {
        View.getHelp()
    }

    static helpCommand() {
        View.getMethodHelp()
    }

    static listCommand() {
        let processAll = Model.getList()
        // console.log(processAll)
        View.getViewList(processAll)
    }
    
    static addComand(processName) {
        Model.addList(processName)
        View.getAddStatus(processName)
    }

    static findByIdCommand(searchId) {
        let processAll = Model.getList()
        View.getFindById(processAll, searchId)
    }

    static deleteCommand(deleteId){
        let processAll = Model.getList()
        View.getDeleteStatus(processAll, deleteId)
        Model.deleteList(deleteId)
    }

    static completeCommand(searchId){
        Model.completeData(searchId)
        let processAll = Model.getList()
        View.getViewList(processAll)
    }

    static uncompleteCommand(searchId){
        Model.uncompleteData(searchId)
        let processAll = Model.getList()
        View.getViewList(processAll)
    }

    
}

module.exports = TodoController