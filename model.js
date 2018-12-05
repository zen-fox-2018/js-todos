const fs = require('fs')
let data = fs.readFileSync('./data.json', 'utf8')

class Model {
    constructor(id, input) {
        this.id = id
        this.task = input
    }

    static getData() {
        // console.log(data);
        let convertData = JSON.parse(data)
        // console.log(convertData,'---> ini convert data');
        return convertData
    }

    static getList() {
        let listData = Model.getData()
        let resultList = []
        for (let i = 0; i < listData.length; i++) {
            resultList.push(`${listData[i].id}. ${listData[i].task}`)
        }
        return resultList
    }

    static addData(input) {
        let listDataInput = Model.getData()
        // console.log(listDataInput);
        listDataInput.push(new Model(listDataInput.length + 1, input))
        // console.log(JSON.stringify(listDataInput)),'--> ini data input';
        // console.log(listDataInput);
        // return listDataInput
        Model.save(listDataInput)
    }

    static findID(input) {
        let listData = Model.getData()
        let result = ''
        for (let i = 0; i < listData.length; i++) {
            // console.log(listData[i].id,'ini list data findID');
            if (listData[i].id == input) {
                result = `${listData[i].id}. ${listData[i].task}`
            }
        }
        return result
    }

    static deleteData(input) {
        let listDataInput = Model.getData()
        let value = ''
        for (let i = 0; i < listDataInput.length; i++) {
            // console.log(listDataInput[i].id,'ini loop');
            if (listDataInput[i].id == input) {
                // console.log(listDataInput[i].task);
                value = listDataInput[i].task
                listDataInput.splice(input-1,1)
            }
        }
        Model.save(listDataInput)
        return value
    }


    static save(dataInput) {
        let listData = dataInput
        let saveData = []
        for (let i = 0; i < listData.length; i++) {
            saveData.push(listData[i])
        }
        // console.log(saveData,'ini save data');
        fs.writeFileSync('./data.json', JSON.stringify(saveData, null, 2))
    }
}

// Model.getData()
// Model.getList()
// Model.addData()
// Model.save()
// Model.findID(2)
// Model.deleteData(3)

module.exports = Model