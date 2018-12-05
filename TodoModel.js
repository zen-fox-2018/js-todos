const fs = require('fs');
class TodoModel {
  constructor(obj) {
    this.id = obj.id;
    this.task = obj.task;
    this.status = obj.status;
    this.created_at = obj.created_at;
    this.completed_at = obj.completed_at;
    this.tag = obj.tag;
  }

  static readFile() {
    const file = fs.readFileSync('./data.json','utf8');
    return file;
  }

  static listTask() {
    const file = this.readFile();
    const allData = JSON.parse(file);
    return allData.map( task => {
      let obj = {
        id : task.id,
        task : task.task,
        status : task.status,
        created_at : task.created_at,
        completed_at: task.completed_at,
        tag: task.tag
      };
      return new TodoModel(obj);
    });
  }

  static addTask(task) {
    let allData = this.listTask();
    let id = 0;
    allData.length ? id = allData[allData.length-1].id + 1: id = 1;
    let objTask = {
      id :  id,
      task : task,
      status : false,
      created_at : Date.now(),
      completed_at : null,
      tag : []
    }
    let newTask =  new TodoModel(objTask);
    newTask.addTask();
  }

  static findById(id) {
    const allData = TodoModel.listTask();
    let index = allData.findIndex(task => {
      return task.id === +id;
    });
    return allData[index];
  }

  static deleteTask(id) {
    const allData = TodoModel.listTask();
    let index = allData.findIndex(task => {
      return task.id === +id;
    });
    if (index != -1) {
      let deleted = allData.splice(index, 1);
      this.save(allData);
      return deleted[0];
    } else {
      return [];
    }
  }

  static completedTask(id, status) {
    const allData = TodoModel.listTask();
    let index = allData.findIndex(task => {
      return task.id === +id;
    });
    if (index != -1) {
      allData[index].status = status;
      status === true ? allData[index].completed_at = Date.now() : allData[index].completed_at = null;
      this.save(allData);
      return allData[index];
    } else {
      return null;
    }
  }

  static sortingTask(by, sorting) {
    let allData = TodoModel.listTask();
    if (by === 'completed_at') {
      allData = allData.filter( task => {
        return task.completed_at != null;
      });
    }
    if (sorting === 'asc') {
      allData = allData.sort((a,b) => (a[by] > b[by]) ? 1 : ((b[by] > a[by]) ? -1 : 0));
    } else if (sorting === 'desc') {
      allData = allData.sort((a,b) => (a[by] < b[by]) ? 1 : ((b[by] < a[by]) ? -1 : 0));
    }
    return allData;
  }

  static addTag(id, arr) {
    const allData = TodoModel.listTask();
    let index = allData.findIndex(task => {
      return task.id === +id;
    });
    if (index != -1) {
      arr.forEach( tag => {
        allData[index].tag.push(tag);
      });
      this.save(allData);
      return allData[index];
    } else {
      return null;
    }
  }

  static filterTag(tag) {
    let allData = TodoModel.listTask();
    let filterData = allData.filter( task => {
        return task.tag.includes(tag);
    });
    return filterData;
  }

  addTask() {
    const allData = TodoModel.listTask();
    allData.push(this);
    TodoModel.save(allData);
  }

  static save(task) {
    fs.writeFileSync('./data.json', JSON.stringify(task, null, 2));
  }
}
module.exports = TodoModel;
