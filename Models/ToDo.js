const fs = require('fs')
class ToDo {
    constructor(task, id , isComplete, create, completeddate, tag) {
        this.id =  id || null
        this.task = task
        this.Complete = isComplete || false
        this.createdAt = create || new Date()
        this.completedDate = completeddate || null
        this.tag = tag || []
    }

    static readData() {
        const data = fs.readFileSync("./data.json", "utf8")
        return data
    }

    static writeData(newData) {
        fs.writeFileSync("./data.json",JSON.stringify(newData,null,4))
    }

    save() {
        const data = ToDo.findAllData()
        this.id = data[data.length-1].id + 1
        data.push(this)
        ToDo.writeData(data)
    }

    static findAllData() {
        const rawdata = JSON.parse(ToDo.readData())
        let newData = rawdata.map( todo => {
            return new ToDo(todo.task, todo.id, todo.Complete, todo.createdAt , todo.completedDate, todo.tag)
        });
        return newData
    }

    static findOne(id) {
        let list = ToDo.findAllData()
        let task = list.filter(todo => {
            if(todo.id === Number(id)) {
                return todo
            }
        })
        return task[0]
    }

    static deleteData(id) {
       let data = this.findAllData()
       let todo = data.find( task => task.id == Number(id))
       if (todo === undefined) {
           return false
       } else {
           let newData = data.filter(task => {
               return task.id !== Number(id)
           })
           ToDo.writeData(newData)
       }
       return todo
    }

    static Complete(input,id) {
        let data = ToDo.findAllData()
        let isComplete = false
        if (input === "complete") {
            isComplete = true
        }
        let check = false
        data.forEach(element => {
            if (element.id === Number(id)) {
                if (element.Complete === isComplete) {
                    check = []
                } else {
                    element.Complete = isComplete
                    check = true
                    if (isComplete === true) {
                        element.completedDate = new Date()

                    }
                }
            }
        });
        if(check) {
            ToDo.writeData(data)
        }
        return check

    }

    static listByOrder(sort, field) {

        let data = ToDo.findAllData()
            if (sort === "asc") {
               let result =  data.sort(function(a,b){
                    var c = new Date(a[field]);
                    var d = new Date(b[field]);
                    return d-c;
                    });
                return result
            } else {
                let result =  data.sort(function(a,b){
                    var c = new Date(a[field]);
                    var d = new Date(b[field]);
                    return c-d;
                    });
                return result
            }  
    }

    static addTag(input) {
        let id = Number(input[0])
        let tags = input.slice(1)
        let data = ToDo.findAllData()
        let result = null
        data.forEach(element => {
            if (element.id === id) {
                result = element
                tags.forEach(Tag =>{
                    element.tag.push(Tag)
                })
            }
        })
        ToDo.writeData(data)
        return result
    }

    static filter(tags) {
        let data = this.findAllData()
        let result = []
         data.forEach(task => {
            task.tag.forEach(element => {
                if(element === tags) {
                    result.push(task)
                }
                
            });
         })
        return result
    }

}
module.exports = ToDo