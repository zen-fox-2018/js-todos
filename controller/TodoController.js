const Model = require('../model/TodoModel')
const View = require('../view/TodoView')

class TodoController {
    static help() {
        View.displayHelp()
    }

    static list() {
        let data = Model.findAll()
        View.displayData(data)
    }

    static add(task) {
        Model.add(task)
        View.displayAdd(task)
    }

    static findById(id) {
        let task = Model.findOne(id)
        task !== undefined ? View.displayOne(task):View.displayError('error find id')
    }

    static delete(id) {
        // let taskName = Model.delete(id)
        // taskName !== 'error' ? View.displayDelete(taskName):View.displayError('error delete task')
        const task = Model.findOne(id)
        let result = task.delete()
        result !== 'error' ? View.displayDelete(result):View.displayError('error delete task')
    }

    static complete(id) {
        let data = Model.update(id, 'complete')
        data !== 'error' ? View.displayData(data): View.displayError('error complete task')
    }

    static uncomplete(id) {
        let data = Model.update(id, 'uncomplete')
        data !== 'error' ? View.displayData(data): View.displayError('error uncomplete task')
    }

    static created(input) {
        let data = Model.findAll('createdAt', input)
        View.displayData(data)
    }

    static completed(input) {
        let data = Model.findAll('updatedAt', input)
        View.displayData(data)
    }

    static addTag(id, tags) {
        let data = Model.update(id, tags)
        View.displayTags(data)
    }

    static filterTag(tag) {
        let result = Model.findAll(tag)
        View.displayFilter(result)
    }
}

module.exports = TodoController
// const todo = Model.findOne()
// todo.delete()