const fs = require('fs')

class ModelToDo {
    static readFile() {
        const file = fs.readFileSync('./data.json', 'utf8')
        return file
    }

    static fileOperation() {
        const fileObj = JSON.parse(this.readFile())
        return fileObj
    }

    static readHelp() {
        const help = fs.readFileSync('./help.txt', 'utf-8')
        return help
    }

    static addingList(input) {
        let allTheTasks = []
        let pushInputObj = {}
        // pushInputObj.id;
        if (ModelToDo.fileOperation().length ==== 0) {
            pushInputObj.id = 1  
        } else {
            pushInputObj.id = ModelToDo.fileOperation()[ModelToDo.fileOperation().length - 1].id + 1
        }
        pushInputObj.task = input
        pushInputObj.isCompleted = false
        pushInputObj.Date_Created = Date(Date.now())
        for (let i = 0; i < ModelToDo.fileOperation().length; i++) {
           allTheTasks.push(ModelToDo.fileOperation()[i])
        }
        allTheTasks.push(pushInputObj)
        const toString = JSON.stringify(allTheTasks, null, 2)
        fs.writeFileSync('./data.json', toString)
    }

    static deleteTask(id) {
        let taskRemoved = []
        for (let i = 0; i < ModelToDo.fileOperation().length; i++) {
            if (i !== id - 1) {
                taskRemoved.push(ModelToDo.fileOperation()[i])
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(taskRemoved, null, 2))
    }
    static completedTask(id) {
        let data = ModelToDo.fileOperation()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(id)) {
                data[i].isCompleted = true
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    }
    static uncompletedTask(id) {
        let data = ModelToDo.fileOperation()
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(id)) {
                data[i].isCompleted = false
            }
        }
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    }
}
module.exports = ModelToDo