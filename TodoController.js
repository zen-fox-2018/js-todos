const TodoModel = require ('./TodoModel.js');
const TodoView = require ('./TodoView.js');

class TodoController {
  static help () {
    TodoView.showHelp();
  }

  static listTask() {
    const list = TodoModel.listTask();
    list.length > 0 ? TodoView.showList(list) : TodoView.showEmptyList();
  }

  static addTask (task) {
    TodoModel.addTask(task);
    TodoView.addSuccess(task);
    const list = TodoModel.listTask();
    list.length > 0 ? TodoView.showList(list) : TodoView.showEmptyList();
  }

  static findById(id) {
    const list = TodoModel.findById(id);
    list != undefined ? TodoView.showList([list]) : TodoView.showByIdError();
  }

  static deleteTask(id) {
    const task = TodoModel.deleteTask(id);
    task.length != 0 ? TodoView.showDeleteTask(task) : TodoView.showByIdError();
  }

  static completedTask(id, status) {
    const task = TodoModel.completedTask(id, status);
    task ? this.listTask() : TodoView.showByIdError();
  }

  static sortingTask(by, sorting) {
    const task = TodoModel.sortingTask(by, sorting);
    if (sorting === 'asc' || sorting === 'desc') {
      task.length > 0 ? TodoView.showList(task) : TodoView.showEmptyList();
    } else {
      TodoView.showSintaxError();
      TodoView.showHelp();
    }
  }

  static addTag(id, tags) {
    const task = TodoModel.addTag(id, tags);
    TodoView.showTag(task);
  }

  static filterTag(tag) {
    const task = TodoModel.filterTag(tag);
    TodoView.showList(task);
  }
}

module.exports = TodoController;
