const View = require('./view.js');
const Model = require('./model.js');


class Controller {

    static Help() {
        View.viewHelp();
    }

    static Task() {
        const gnrList = Model.findAllData();
        View.viewList(gnrList);
    }

    static Add(newData) {
        const gnrList = Model.findAllData();

        Model.addData(newData)
        View.viewAdd(newData);
    }
}

module.exports = Controller;