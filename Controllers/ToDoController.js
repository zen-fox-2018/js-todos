const View = require('../Views/View')
const ToDo = require('../Models/ToDo')
class ToDoController {

    static help() {
        View.displayAllCommand()
    }

    static getList(option,order) {
        let list =  ToDo.findAllData()
        let sort = order[0] || "asc"
        if (option.length > 1) {
            let field = null
            if(option[1] === "completed") {
                field = "completedDate"
            } else if (option[1] === "create") {
                field = "createdAt"
            }
            list = ToDo.listByOrder(sort,field)
        }
        View.displayList(list)
    }

    static addTask(task) {
        let todo = new ToDo(task)
        todo.save()
        View.SuccessSave(todo)

    }

    static findById(id) {
        let task = ToDo.findOne(id)
        if(task !== undefined) {
            View.displayOneTask(task)
        } else {
            View.displayNotFound()
        }
    }

    static deleteTask(id) {
        let isdelete = ToDo.deleteData(id)
        if(!isdelete) {
            View.displayNotFound()
        } else {
            View.SuccessDelete(isdelete.task)
        }
    }

    static Complete(input) {
        let data = ToDo.Complete(input[0],input[1]) 
        if(!data) {
            View.displayNotFound()
        } else if (data.length === 0) {
            View.displayError(input[0])
        } else {
            ToDoController.getList()
        }
    }

    static addTag(input) {
        let tag = ToDo.addTag(input)
        View.successAddTag(tag)
    }

    static filter(input) {
        let tag = input[1]
        let task = ToDo.filter(tag)
        if(task.length === 0) {
            View.displayNotFound()
        } else {
            View.filter(task)
        }
    }


}

module.exports = ToDoController