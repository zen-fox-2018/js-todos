const Model = require("./Model.js");
const View = require("./View.js");

class Controller {
    static commands(input, task) {
        switch(input) {
            case undefined:
            Controller.help();
            break;
            case "help":
            Controller.help();
            break;
            case "list":
            Controller.list();
            break;
            case "add":
            Controller.addList(task)
            break;
            case "findById":
            Controller.findById(Model.dataInArray(), task);
            break;
            case "delete":
            Controller.delete(task)
            break;
            case "complete":
            Controller.completed(task);
            break;
            case "uncomplete":
            Controller.uncomplete(task);
            break;
        }
    }

    static help() {
        View.help();
    }

    static list() {
        View.list(Model.dataInArray());
    }

    static findById(data, task) {
        View.findById(data, task);
    }

    static addList(task) {
        Model.addToDo(task);
        View.addedToDo(task);
    }

    static delete(task) {
        View.deleteData(task, Model.dataInArray());
        Model.deleteData(task);
    }

    static completed(task) {

    }
    static uncomplete(task) {
        
    }

}

module.exports = Controller;
