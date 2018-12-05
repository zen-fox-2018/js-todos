const fs = require('fs');

class Model {

    constructor(id, task) {
        this.id = id
        this.task = task
    }

    static readFile() {
        const data = fs.readFileSync('./data.json', 'utf8');
        return data;
    }

    static findAllData() {
        let modelData = JSON.parse(Model.readFile());
        let dataArr = [];

        for (let i = 0; i < modelData.length; i++) {
            dataArr.push(new Model(modelData[i].id, modelData[i].task));
        }

        return dataArr;
    }

    static addData(newData) {
        let processAdd = this.findAllData();

        processAdd.push(new Model(processAdd.length + 1, newData));
    }

}

Model.addData()

module.exports = Model;