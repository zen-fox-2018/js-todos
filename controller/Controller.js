const Model = require('../model/Model.js')
const View = require('../view/View.js')

class Controller {
    static help() {
        View.displayHelp()
    }

    static list() {
        View.displayAllTask(Model.list())
    }

    static add(task) {
        let newTask = new Model(task)
        newTask.add()
        View.displaySuccess(`Added "${newTask.task}" to your ToDo list...`)
    }

    static findById(id) {
        let data = Model.findById(id)
        if(data === false) {
            View.displayIdFailed('No Task found')
        } else {
            View.displayId(data)
        }
    }

    static delete(id) {
        const data = Model.findById(id)
        // console.log(data)
        //findOne dulu, kemuian validasi
        if(data !== false) {
            data.delete()
            View.displaySuccess(`Deleted ${data.task} from your ToDo List...`)
        } else {
            View.displayIdFailed(`Failed Delete ${data.task}`)
        }
    }

    static complete(id) {
        Model.complete(id)
        View.displaySuccess(`Task Complete!`)
    }

    static uncomplete(id) {
        Model.uncomplete(id)
        View.displaySuccess(`Task uncomplete!`)
    }
}

// console.log(Controller.delete())

module.exports = Controller