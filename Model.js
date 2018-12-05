const fs = require('fs')

class Model {
    constructor(nameTask){
        this.status = false
        this.task = nameTask
        this.createdDate = Date.now()
        this.completeDate = null
    }

    static getData() {
        let data = fs.readFileSync('./data.json','utf8')
        return data
    }

    static getList() { 
        let list = JSON.parse(this.getData())
        return list
    }

    static deleteList(dataId){
        let list = this.getList()
        list.splice(dataId-1, 1)
     
        fs.writeFileSync('./data.json', JSON.stringify(list,null,2))
    }

    static completeData(dataId){
        let data = this.getList()
        
        for(let i = 0; i < data.length ; i++){
            if(i + 1 == dataId){
                data[i].status = true
                data[i].completeDate = Date.now()
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(data,null,2))
    }

    static uncompleteData(dataId){
        let data = this.getList()
        
        for(let i = 0; i < data.length ; i++){
            if(i + 1 == dataId){
                data[i].status = false
                data[i].completeDate = null
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(data,null,2))
    }

    static addList(newProcess){
       
        let newModel = new Model(newProcess)
        newModel.saveList()
      
    }

     saveList() {
        let processAll = Model.getList()
        processAll.push(this)
        // console.log(processAll)
        fs.writeFileSync('./data.json', JSON.stringify(processAll,null,2))
        // console.log(processAll);
        
    }

}
module.exports = Model