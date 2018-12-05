const fs = require('fs')

class Model {
    constructor(task, id, status) {
        this.id = id || null
        this.task = task
        this.status = status || 'uncomplete'
    }

    static readFile() {
        let data = fs.readFileSync('./data.json', 'utf8')
        return JSON.parse(data)
    }

    static writeFile(data) {
        return fs.writeFileSync('./data.json', data)
    }

    static list() {
        let data = this.readFile()
        // console.log(data, '======== ini data mentah')
        let tempTask = []
        for(let i = 0; i < data.length; i++) {
            let task = null
            if(data[i].status === 'complete') {
                task = new Model(data[i].task, data[i].id, 'complete')
                tempTask.push(task)
            } else {
                task = new Model(data[i].task, data[i].id, 'uncomplete')
                tempTask.push(task)
            }
        }
        let showAll = []
        // console.log(tempTask, '====== ini data baru')
        for(let i = 0; i < tempTask.length; i++) {
            if(tempTask[i].status === 'complete') {
                showAll.push(`${i+1}. [X] ${tempTask[i].task}`)
            } else {
                showAll.push(`${i+1}. [ ] ${tempTask[i].task}`)
            }
        }
        return showAll.join('\n')
    }

    add() {
        let data = Model.readFile()
        this.id = data[data.length-1].id + 1
        data.push(this)
        Model.writeFile(JSON.stringify(data, null, 2))
    }

    static findById(id) {
        let numberId = Number(id)
        let data = this.readFile()
        for(let i = 0; i < data.length; i++) {
            if(numberId === data[i].id) {
                return new Model(data[i].task, data[i].id)
            }
        }
        return false
    }

    delete() {
        let data = Model.readFile()
        let numberId = Number(this.id)
        for(let i = 0; i < data.length; i++) {
            if(numberId === data[i].id) {
                data.splice(i, 1)
            }
        }
        Model.writeFile(JSON.stringify(data, null, 2))
    }

    static complete(id) {
        let data = this.readFile()
        let numberId = Number(id)
        for(let i = 0; i < data.length; i++) {
            if(numberId === data[i].id) {
                data[i].status = 'complete'
            }
        }
        this.writeFile(JSON.stringify(data, null, 2))
    }

    static uncomplete(id) {
        let data = this.readFile()
        let numberId = Number(id)
        for(let i = 0; i < data.length; i++) {
            if(numberId === data[i].id) {
                data[i].status = 'uncomplete'
            }
        }
        Model.writeFile(JSON.stringify(data, null, 2))
    }
}

module.exports = Model