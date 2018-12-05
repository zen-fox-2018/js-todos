const Model = require('./model.js')
const View = require('./view.js')

class Controller {

    static controlHelp() {
        View.showHelp()
    }

    static controlList() {
        let list = Model.getList()
        View.showList(list)
    }

    static controlAdd(input) {
        Model.addData(input)
        View.showAddedData(input)
    }

    static controlFindID(input) {
        let getId = Model.findID(input)
        View.showFindId(getId)
    }

    static controlDelete(input) {
        let getId = Model.deleteData(input)
        View.showDeleted(getId)

    }

    static whenUndefined() {
        View.showUndefined()
    }
}

module.exports = Controller