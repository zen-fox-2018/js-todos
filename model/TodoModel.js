const fs = require('fs')

class TodoModel {
    constructor(task) {
        this.id = task.id
        this.task = task.task
        this.status = task.status
        this.createdAt = task.createdAt
        this.updatedAt = task.updatedAt
        this.tags = task.tags
    }
    
    static findAll(by, input) {
        let data = fs.readFileSync('./data.json', 'utf8')
        data = JSON.parse(data)
        let result = data.map(task => {
            let obj = {
                id: task.id,
                task: task.task,
                status: task.status,
                createdAt: task.createdAt,
                updatedAt: task.updatedAt,
                tags: task.tags
            }
            return new TodoModel(obj)
        })
        if (by === 'createdAt') {
            if (input === 'desc') {
                result.sort((a,b) => a.createdAt < b.createdAt)
            } else {
                result.sort((a,b) => a.createdAt > b.createdAt)
            }
        } else if (by === 'updatedAt') {
            result = result.filter(task => task.status === 1)
            if (input === 'desc') {
                result.sort((a,b) => a.updatedAt < b.updatedAt)
            } else {
                result.sort((a,b) => a.updatedAt > b.updatedAt)
            }
        } else if (by !== undefined) {
            result.forEach((task, i) => {
                let check = task.tags.includes(by)
                check === false ? result.splice(i, 1): false
            });
        }
        return result
    }

    static findOne(id) {
        let data  = this.findAll()
        let index = data.findIndex(task => {
            return task.id === +id
        })
        return data[index]
    }
    
    static add(task) {
        let data = this.findAll()
        let id = null
        data.length === 0 ? id = 1: id = data[data.length-1].id + 1
        let obj = {
            id: id,
            task: task,
            status: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            tags: []
        }
        data.push(new TodoModel(obj))
        this.save(data)
    }

    delete() {
        // let data = this.findAll()
        // let index = data.findIndex(task => {
        //     return task.id === +id
        // })
        // if (index === -1 ) {
        //     return 'error'
        // } else {
        //     let taskName = data[index].task
        //     data.splice(index, 1)
        //     this.save(data)
        //     return taskName
        // }
        let data = TodoModel.findAll()
        let index = data.findIndex(task => {
            return task.id === this.id
        })
        if (index === -1 ) {
            return 'error'
        } else {
            let taskName = data[index].task
            data.splice(index, 1)
            TodoModel.save(data)
            return taskName
        }   
    }

    static update(id, msg) {
        let data = this.findAll()
        let index = data.findIndex(task => task.id === +id)
        if (index !== -1) {
            if (typeof msg === String) {
                msg === 'complete' ? data[index].status = 1: data[index].status = 0
                data[index].updatedAt = new Date()
            } else {
                msg.forEach(tag => {
                    data[index].tags.push(tag)
                });
                this.save(data)
                return data[index]
            }
            this.save(data)
            return data
        } else {
            return 'error'
        }
    }

    static save(data) {
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync('./data.json', data)
    }

}

module.exports = TodoModel