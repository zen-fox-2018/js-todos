
const Model = require("../Models/model");
const View = require("../Views/view");

class Controller {

    static willCallHelp() {
        View.help()
    }

    static getlist() {
        let data = Model.list();
        View.showList(data)
    }

    static add(task) {
       let data = Model.addToDos(task);
       View.addData(data)
    }

    static findById(id) {
        let data = Model.findById(id)
        View.showFindById(data)
    }

    static delete(id) {
        let data = Model.deleteById(id);
        View.showDelete(data)
    }

    static completed(command, input) {
        let data = Model.completedCheck(command, input);
        View.showCompleted(data)
    }
}

module.exports = Controller