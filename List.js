const fs = require('fs')

class List {
  constructor(id, task, created, status = false, done_date = null, tag = null) {
    this.id = id
    this.status = status
    this.task = task
    this.created_date = created
    this.done_date = done_date
    this.tag = tag
  }

  static readFile() {
    let file = fs.readFileSync('./data.json', 'utf8')
    let output = JSON.parse(file)
    return output
  }

  static showList(sort = 'asc', type) {
    let file = this.readFile()
    let array = file.concat()
    let list = null

    if (type === 'done_date') {
      array = array.filter(a => a.status !== false)
    }

    if (sort === 'dsc') {
      array.sort(function (a,b) { return new Date(a[type]) < new Date(b[type]) });
    } else if (sort === 'asc') {
      array.sort(function (a,b) { return new Date(a[type]) > new Date(b[type]) });
    }

    for (let i = 0 ; i < array.length ; i++) {
      list = new List(array[i].id, array[i].task, array[i].created_date, array[i].status, array[i].done_date, array[i].tag)
      array[i] = list
    }
    return array
  }

  static writeFile(output) {
    output = JSON.stringify(output,null,2)
    fs.writeFileSync('./data.json', output)
  }

  static addList(newList) {
    let output = this.showList()
    let newId = output[output.length-1].id + 1
    output.push(new List(newId, newList, (new Date()).toString()))
    this.writeFile(output)
  }

  static deleteById(search) {
    let output = this.showList()

    for ( let i = 0 ; i < output.length ; i++) {
      if (output[i].id == search){
        output.splice(i, 1)
        break
      }
    }

    this.writeFile(output)
  }

  static completed(index, status) {
    let output = this.showList()
    output[index-1].status = status
    output[index-1].done_date = (new Date()).toString()
    this.writeFile(output)
    return output
  }

  static addTag(search, tag) {
    let output = this.showList()
    let index = null

    for (let i = 0 ; i < output.length ; i++) {
      if (output[i].id == search) {
        output[i].tag = []
        output[i].tag.push(tag)
        index = i
        break
      }
    }

    this.writeFile(output)
    console.log(output[index]);
    return output[index]
  }

  static filterTag(tag) {
    let output = this.showList()
    let index = []

    for (let i = 0 ; i < output.length ; i++) {
      if (output[i].tag !== null) {
        for (let j = 0 ; j < output[i].tag.length ; j++) {
          if (tag === output[i].tag[j]) {
            index.push(output[i])
          }
        }
      }
    }
    return index
  }
}

module.exports = List
