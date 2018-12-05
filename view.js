//CUMA dipanggil oleh CONTROLLER

class View {

  static askForHelp() {
    console.log('List of Action that you can call');
    console.log('$node todo.js' + '\n' + '$node todo.js help' +  '$node todo.js list' + '\n' + 
    '$node todo.js add <task_content>' + '\n' + '$node todo.js findById <task_id>' + '\n' +
    '$node todo.js delete <task_id>' + '\n' + '$node todo.js complete <task_id>' + '\n' +
    '$node todo.js uncomplete <task_id>' + '\n' + '$node todo.js list:created asc|desc' + '\n' + 
    '$node todo.js list:created asc|desc' + '\n' + '$node todo.js list:completed asc|desc' + '\n' +
    '$node todo.js tag <task_id> <tag_name_1> <tag_name_2> .... <tag_name_n>' + '\n' +
    '$node todo.js list:outsanding asc|desc' + '\n' + '$node todo.js filter:<tag_name>');
  }

  static displayListToDo(input) {
    console.log("Today's List To Do");
    console.log(input);
  }

  static displayMessageAddToDoList(input) {
    console.log(`Added "${input}" to your To Do List...` );
  }

  static displayTaskById(taskId) {
    if (!taskId) {
      console.log('You do not have any task with that ID');
    } else {
      console.log(`Your Task: ${taskId}`);
    }
  }

  static displayMessageDeleteTask(deletedTask) {
    if (!deletedTask) {
      console.log('You do not have any task to be deleted');
    } else {
      console.log(`Deleted "${deletedTask}" from your To Do List...`);
    }
  }

  static displayCompleteTaskslist(listTask) {
    console.log('--- Your To Do Details ---');
    console.log(listTask);
  }

  static displayUncompleteTasksList(listTask) {
    console.log('--- Your To Do Details ---');
    console.log(listTask);
  }

  static displaySortedTask(sortOrder, sortedFile) {
    if (sortOrder === 'desc') {
      sortOrder = 'descending';
    } else {
      sortOrder = 'ascending';
    }
    console.log(`Your To Do list based on '${sortOrder}' order`);
    console.log(sortedFile);
  }
}

module.exports = View;
// console.log(View.askForHelp());