//Controller panggil MODEL -- masukkin ke VIEW
//
const View = require('./view.js')
const Model = require('./model.js');

class Controller {

  static askHelp() {
    View.askForHelp();
  }

  static listToDo() {
    let input = Model.listToDoFiles();
    View.displayListToDo(input);
  }

  static addToDo(input) {
    Model.addToDoList(input);
    View.displayMessageAddToDoList(input);
  }

  static findId(taskId) {
    let input = Model.findTaskById(taskId);
    View.displayTaskById(input);
  }

  static deleteTask(taskId) {
    let deletedTask = Model.deleteTaskById(taskId);
    View.displayMessageDeleteTask(deletedTask);
  }

  static completedTask(taskId) {
    let listTask =  Model.markCompleteTask(taskId);
    View.displayCompleteTaskslist(listTask)
  }

  static uncompletedTask(taskId) {
    let listTask = Model.unmarkUncompletedTask(taskId);
    View.displayUncompleteTasksList(listTask);
  }

  static sortTaskListByDate(sortOrder) {
    let sort = Model.SortTaskList(sortOrder);
    View.displaySortedTask(sortOrder, sort);
  }
}

module.exports = Controller;
// console.log(Controller.askhelp());
// console.log(Controller.addToDo());
