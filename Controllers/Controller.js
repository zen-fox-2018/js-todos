const Model = require(`../Models/Model`)
const View = require(`../Views/View`)

class Controller {

    static list(option, sortBy, type) {
        let listData = Model.findAll(option, sortBy, type)
        View.showData(listData)
    }

    static add(task_content, tags) {
        let addData = Model.create(task_content, tags)
        View.successWrite(addData)
    }

    static findById(task_id) {
        let data = Model.findOne(task_id)
        View.showOne(data)
    }

    static delete(task_id) {
        let data = Model.delete(task_id)
        data.err == true ?
            View.showError(data.msg) :
            View.successDelete(data.data)
    }

    static complete(task_id) {
        let completedData = Model.complete(task_id)
        View.showData(completedData)
    }

    static uncomplete(task_id) {
        let uncompletedData = Model.uncomplete(task_id)
        View.showData(uncompletedData)
    }

    static help() {
        console.log(`$ node todo.js`);
        console.log(`$ node todo.js help`);
        console.log(`$ node todo.js list`);
        console.log(`$ node todo.js add <task_content>`);
        console.log(`$ node todo.js findById <task_id>`);
        console.log(`$ node todo.js delete <task_id>`);
        console.log(`$ node todo.js complete <task_id>`);
        console.log(`$ node todo.js uncomplete <task_id>`);
    }

    static filter(data) {
        let filteredData = Model.filter(data)
        return View.showData(filteredData)
    }
}

module.exports = Controller