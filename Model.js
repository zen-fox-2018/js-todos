const fs = require('fs')

class Model {
  constructor(id, task, status, created, updated, tags) {
    this.id = id
    this.task = task
    this.status = status || false
    this.created = created || new Date
    this.updated = updated || new Date
    this.tags = tags || []

  }

  static readData() {
    return fs.readFileSync('./data.json', 'utf8')
  }

  static writeData(data) {
    return fs.writeFileSync('./data.json', data)
  }

  static findAll() {
    let readData = JSON.parse(this.readData())
    let data = []
    readData.forEach(function(todo) {
      data.push(new Model(todo.id, todo.task, todo.status, todo.created, todo.updated, todo.tags))
    })
    return data
  }

  static findOne(id) {
    let data = this.findAll()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        return data[i]
      }
    }
    return {}
  }

  static addTask(task) {
    let data = this.findAll()
    let id = 0
    if (data.length === 0) {
      id = 1
    }
    else {
      id = data[data.length -1].id+1
    }
    let newTask = new Model(id, task)
    data.push(newTask)
    Model.writeData(JSON.stringify(data, null, 2))
  }

  delete() {
    let data = Model.findAll()
    let index = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.id) {
        index = i
      }
    }
    data.splice(index, 1)
    Model.writeData(JSON.stringify(data, null, 2))
  }

  togglecomplete(id) {
    if (this.status) {
      this.status = false
    }
    else {
      this.status = true
    }
    let data = Model.findAll()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.id) {
        data[i].status = this.status
      }
    }
    Model.writeData(JSON.stringify(data, null, 2))
  }

  tag(arr) {
    let data = Model.findAll()
    for (let i = 0; i < arr.length; i++) {
      let check = true
      for (let j = 0; j < this.tags.length; j++) {
        if (arr[i] === this.tags[j]) {
          check = false
        }
      }
      if (check) {
        this.tags.push(arr[i])
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === this.id) {
        data[i].tags = this.tags
      }
    }
    Model.writeData(JSON.stringify(data, null, 2))
  }

  static filter(filter) {
    let data = Model.findAll()
    let result = []
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].tags.length; j++) {
        if (data[i].tags[j] === filter) {
          result.push(data[i])
        }
      }
    }
    return result
  }

  static sortList(sort) {
    let data = Model.findAll()
    if (sort === "asc" || sort === "undefined") {
      return data
    }
    else if (sort === "desc"){
      return data.sort(function(a,b) {
        if (a.created > b.created) {
          return -1
        }
        if (a.created < b.created) {
          return 1
        }
        return 0
      })
    }
  }

  static sortcompleted(sort) {
    let dataComplete = []
    let data = Model.findAll()
    for (let i = 0; i < data.length; i++) {
      if (data[i].status) {
        dataComplete.push(data[i])
      }
    }
    if (sort === "asc" || sort === "undefined") {
      return dataComplete
    }
    else if (sort === "desc") {
      return dataComplete.sort(function(a,b) {
        if (a.updated > b.updated) {
          return -1
        }
        if (a.updated < b.updated) {
          return 1
        }
        return 0
      })
    }
  }
}

module.exports = Model