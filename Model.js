const fs = require("fs");

class Model {
    static readData() {
        const list = fs.readFileSync("data.json", "utf-8");
        return list;
    }
    static dataInArray() {
        const data = this.theList(JSON.parse(this.readData()));
        return data;
    }
    static theList(data) {
        let theList = [];
        for (let i = 0; i <= data.length-1; i++) {
            let tempList = {}
            tempList['id'] = i+1;
            tempList['toDo'] = data[i].toDo
            theList.push(tempList);
        }
        return theList;
    }
    static addToDo(input) { 
        let newList = {'id' : this.dataInArray().length + 1, 'toDo': input};
        let newData = this.dataInArray();
        newData.push(newList);
        this.rewriteData(newData);
    }
    static deleteData(id) {
        let newData = this.dataInArray();
        for (let i = 0; i <= newData.length-1; i++) {
            if (newData[i].id == id) {
                newData.splice(i, 1);
            }
        }
        this.rewriteData(newData);
    }
    static rewriteData(data) {
        let newData = this.theList(data);
        let dataInString = JSON.stringify(newData, null, 2);
        this.saveAddedToDo(dataInString)
    }
    static saveAddedToDo(data) {
        fs.writeFileSync("data.json", data);
    }
  
}

module.exports = Model;