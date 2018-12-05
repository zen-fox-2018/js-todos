//MODEL <===> database --read data
//MODEL terima request dari controller && SEND data ke CONTROLLER
const fs = require('fs');

class Model {

  static filesData() {
    const files = fs.readFileSync('./data.json', 'utf8'); //rawData only
    let datas = JSON.parse(files);
    // console.log(datas);
    return datas;
  }

  static listToDoFiles() {
    let files = this.filesData();
    let result = '';
    for (let i = 0; i < files.length; i++) {
      result += `${files[i].id}. ${files[i].task}` + '\n';
    }
    return result;
  }

  static addToDoList(input) {      //input dalam bentuk string
    let files = this.filesData();
    let id = files.length + 1;
    files.push({ id: id, mark: [], task: input });
    let result = JSON.stringify(files, null, 1);
    fs.writeFileSync('./data.json', result);
  }

  static findTaskById(taskId) {
    let files = this.filesData();
    if (taskId > files.length) {
      return false;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].id == taskId) {
        return `${files[i].id}. ${files[i].task}`;
      }
    }
  }

  static deleteTaskById(taskId) {
    let files = this.filesData();
    if (taskId > files.length) {
      return false;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].id == taskId) {
        let splicedFiles = files.splice(i, 1);
        let result = JSON.stringify(files, null, 1);
        fs.writeFileSync('./data.json', result);
        return splicedFiles[0].task;
      }
    }
  }

  static markCompleteTask(taskId) {
    let files = this.filesData();
    let result = '';
    for (let i = 0; i < files.length; i++) {
      if (files[i].id == taskId && files[i].mark.length === 0) {
        files[i].mark.push('X');
      }
      result += `${files[i].id}. [${files[i].mark}] ${files[i].task}` + '\n';
    }
    let saveFile = JSON.stringify(files, null, 1);
    fs.writeFileSync('./data.json', saveFile);
    return result;
  }

  static unmarkUncompletedTask(taskId) {
    let files = this.filesData();
    let result = '';
    for (let i = 0; i < files.length; i++) {
      if (files[i].id == taskId) {
        files[i].mark = [];
      }
      result += `${files[i].id}. [${files[i].mark}] ${files[i].task}` + '\n';
    }
    let saveFile = JSON.stringify(files, null, 1);
    fs.writeFileSync('./data.json', saveFile);
    return result;
  }

  static SortTaskList(sortOrder) {
    let files = this.filesData();
    files.sort(function (a, b) {
      if (sortOrder === 'desc') {
        return a.created_date < b.created_date;
      } else {
        return a.created_date > b.created_date;
      }
    });

    let result = '';
    for (let i = 0; i < files.length; i++) {
      result += `${files[i].created_date} --- ${files[i].task}` + '\n';
    }
    return result;
  }
}

module.exports = Model;


//DISPLAY only
// let model = new Model();
// console.log(model.addToDoList());