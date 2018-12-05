const fs = require(`fs`)

class Model {

    constructor(id, taskName, tags) {
        this.id = id
        this.taskName = taskName
        this.status = false
        this.created_date = new Date().toISOString()
        this.completed_date = null
        this.tags = tags
    }

    static create(task_content, tags) {
        let data = this.readFile()
        data.push(new Model(data.length + 1, task_content, tags))
        this.writeFile(data)
        return task_content
    }

    static findAll(option, sortBy, type) {
        
        let data = this.readFile()
        if (sortBy == undefined && type == undefined) {
            return data
        } else {
            return this.sort(data, sortBy, type)
        }
    }

    static findOne(task_id) {
        let data = this.readFile()
        let result = data.filter(task => {
            return task.id === Number(task_id)
        })
        return result[0]
    }

    static delete(task_id) {
        let data = this.readFile()
        let deletedData = null

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === Number(task_id)) {
                deletedData = data[i]
                data.splice(i, 1)
            }
        }

        if (deletedData == null) {
            return {
                err: true,
                data: deletedData,
                msg: `TODO with id: ${task_id} tidak ada, tidak bisa delete`
            }

        } else {
            this.writeFile(data)
            return {
                err: false,
                data: deletedData,
                msg: null
            }
        }
    }

    static complete(task_id, complete) {
        let status = true
        complete == undefined ? status = true : status = false
        let data = this.readFile()

        for (let i = 0; i < data.length; i++) {
            if (data[i].id == Number(task_id)) {
                data[i].status = status
                data[i].completed_date = new Date().toISOString()
            }
        }
        this.writeFile(data)
        return this.findAll()
    }

    static uncomplete(task_id) {
        return this.complete(task_id, true)
    }

    static readFile() {
        let data = fs.readFileSync(`./data.json`, `utf8`)
        data = JSON.parse(data)
        for (let i = 0; i < data.length; i++) {
            data[i].id = i + 1
        }
        return data
    }

    static writeFile(data) {
        fs.writeFileSync(`./data.json`, JSON.stringify(data))
    }

    static sort(data, sortBy, type) {
        let counter = 0
        let resultData

        switch (sortBy) {
            case `completed`:
                resultData = data.filter(e => e.status == true)
                break;

            case `uncompleted`:
                resultData = data.filter(e => e.status == false)
                break;

            default:
                resultData = data
                break;
        }
        if (type == undefined) {
            return resultData
        } else {
            while (counter < resultData.length) {
                for (let i = 0; i < resultData.length - 1; i++) {
                    if (type == `desc`) {
                        if (resultData[i + 1].id > resultData[i].id) {
                            let temp = resultData[i + 1]
                            resultData[i + 1] = resultData[i]
                            resultData[i] = temp
                        }
                    } else {
                        if (resultData[i + 1].id < resultData[i].id) {
                            let temp = resultData[i + 1]
                            resultData[i + 1] = resultData[i]
                            resultData[i] = temp
                        }
                    }
                }
                counter++
            }
            return resultData
        }
    }

    static filter(word) {
        let data = this.readFile()
        data = data.filter(function (e) {
            return e.tags.indexOf(word) != -1
        })
        return data
    }

}

module.exports = Model