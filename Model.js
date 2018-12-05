const fs = require('fs')
class Task {
  constructor(id , task, status, date, date2, tag) {
    this.id = id || null
    this.task = task
    this.complete =  status || false
    this.created = date || new Date()
    this.completeDate = date2 || null
    this.tag = tag || []
  }
  static readFile() {
    return JSON.parse(fs.readFileSync('data.json' , 'utf8'))
  }

  static write(newData) {
    return fs.writeFileSync('data.json' , newData, 'utf8')
  }

  static getAll() {
    let result = []
    Task.readFile().forEach((task, i) => {
      let newTask = new Task(task.id, task.task, task.complete, task.created,task.completeDate,task.tag)
      result.push(newTask)
    });
    return result
  }

  add() {
    let data = Task.getAll()
    this.id = data[data.length-1].id +1
    data.push(this)
    Task.write(JSON.stringify(data, null , 2))
  }
  
  static find(id) {
    let result = []
    Task.getAll().forEach(x => {
      if (x.id == id) {
        result.push(x)
      }
    })
    return result
  }

  static delete(id) {
    let result = []
    let taskDeleted = ''
    Task.getAll().forEach(x => {
      if(x.id != id) {
        result.push(x)
      } else {
        taskDeleted = x.task
      }
    })
    Task.write(JSON.stringify(result, null , 2))
    return taskDeleted
  }

  static setCom(id) {
    let result = [] 
    Task.getAll().forEach(x => {
      if(x.id == id) {
        x.complete = !x.complete
        if(x.complete == true) {
          x.completeDate = new Date()
        }  else {
          x.completeDate = null
        }
      } else {
        x.completeDate = x.completeDate
      }
      
      result.push(x)
    })
    Task.write(JSON.stringify(result, null , 2))
  }

  static tag(id , option) {
    let result = []
    let task = ''
    Task.getAll().forEach(x =>{
      if(x.id == id) {
        x.tag = option
        task = x
      }
      result.push(x)
    })
    Task.write(JSON.stringify(result, null , 2))
    return task
  }

  static filter(tag) {
    let result ;
    Task.getAll().forEach(x => {
      x.tag.forEach(element => {
        if(element == tag) {
          result = x
        }
      })
     
    })
    return result
  }
}
module.exports = Task