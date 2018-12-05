const fs = require('fs')

class ToDoModel {
    constructor(task, completed, createdAt, completedAt){
        this.task = task
        this.completed = completed || false
        this.createdAt = createdAt || Date.now()
        this.completedAt = completedAt || 0
    }

    static readFile(){
       let file = fs.readFileSync('./data.json', 'utf8')
       return file
    }

    static parseFile(){
        let parsedFile = JSON.parse(this.readFile())
        let formattedFile= []

        for(let i = 0; i < parsedFile.length; i++){
            formattedFile.push(new ToDoModel(parsedFile[i].task, parsedFile[i].completed, parsedFile[i].createdAt, parsedFile[i].completedAt))
        }
        return formattedFile
    }

    static add(data){
        let newArrData = this.parseFile()
        newArrData.push(new ToDoModel(data, false))
        this.save(newArrData)
    }

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8')
    }

    static delete(id){
        let ToDoData = this.parseFile()
        let newArrData = []

        for(let i = 0; i < ToDoData.length; i++){
            if(i!== id-1){
                newArrData.push(ToDoData[i])
            }
        }

        fs.writeFileSync('./data.json', JSON.stringify(newArrData, null, 2), 'utf8')
    }
}

// console.log(ToDoModel.parseFile());

module.exports = ToDoModel