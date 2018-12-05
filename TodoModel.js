const fs = require ('fs')

class TodoModel {
    constructor(id, task, completed, dateCreated){
        this.id = id
        this.task = task
        this.completed = completed
        this.created = dateCreated
    }

    static readFile() {
        let dataFile = fs.readFileSync('./help.json','utf-8')
        return dataFile
    }

    static writeFile(stringObject) {
        fs.writeFileSync('./help.json', stringObject , 'utf-8')
    }

    static parseFile() {
        let data = JSON.parse(this.readFile())
        let result = []
        for(let i = 0; i < data.length; i++){
            let objClassData = new TodoModel(data[i].id, data[i].task, data[i].completed, data[i].created)
            result.push(objClassData)
        }
        return result
    }

    static inputStringToDatabase(stringData){
        let data = this.parseFile()
        let newId = 0
        if(this.parseFile().length == 0){
            newId = 1
        }
        else {
            newId = this.parseFile()[this.parseFile().length-1].id + 1
        }
        
        let newCompleted = false
        let newDateCreated = new Date()
        // console.log(newId)
        data.push(new TodoModel(newId, stringData, newCompleted, newDateCreated))
        let stringProcessed =JSON.stringify(data, null, 2)
        this.writeFile(stringProcessed)
    }

    static deleteById(id) {
        let data = this.parseFile()
        let newData = []
        for(let i = 0; i < data.length; i++){
            if(data[i].id != id){
                newData.push(data[i])
            }
        }
        let stringProcessed = JSON.stringify(newData, null, 2)
        this.writeFile(stringProcessed)
    }

    static modelCompletedById(id){
        let data = this.parseFile()
        // let newData = []
        for (let i = 0; i < data.length; i++ ) {
            if(data[i].id == id) {
                data[i].completed = true
            }
        }
        let stringProcessed = JSON.stringify(data, null, 2)
        this.writeFile(stringProcessed)
    }

    static modelUncompletedById(id){
        let data = this.parseFile()
        // let newData = []
        for (let i = 0; i < data.length; i++ ) {
            if(data[i].id == id) {
                data[i].completed = false
            }
        }
        let stringProcessed = JSON.stringify(data, null, 2)
        this.writeFile(stringProcessed)
    }


}

// console.log(TodoModel.parseFile())

module.exports = TodoModel