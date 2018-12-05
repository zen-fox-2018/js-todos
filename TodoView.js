class TodoView {
  static showHelp() {
    console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js findById <task_id>`);
    console.log(`$ node todo.js delete <task_id>`);
    console.log(`$ node todo.js complete <task_id>`);
    console.log(`$ node todo.js uncomplete <task_id>`);
  }

  static showEmptyList() {
    console.log(`data list task kosong, silahkan mengikuti langkah berikut :`);
    this.showHelp();
  }

  static showList(list) {
    let ket = '';
    list.forEach ( (task, i) => {
      task.status === true ? ket = 'x' : ket = ' ';
      console.log(`${i+1}. id: ${task.id} [${ket}] ${task.task} [${task.tag.join(' ')}]`);
    });
  }

  static addSuccess(task) {
    console.log(`add ${task} success`);
  }

  static showByIdError() {
    console.log(`Task tidak ditemukan silahkan ketikkan "$node todo.js list" untuk melihat list.`);
  }

  static showDeleteTask(task) {
    console.log(`Deleted ${task} from TO DO list...`);
  }

  static showSintaxError() {
    console.log(`Syntax yang kamu masukkan salah, lihat kumpulan perintah berikut :`);
  }

  static showTag(task) {
    console.log(`Tagged task "${task.task}" with tags: ${task.tag.join(' ')}`);
  }
}

module.exports = TodoView;
