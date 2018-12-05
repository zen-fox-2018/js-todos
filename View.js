class View {
  constructor() {

  }

  static showHelp() {
    const help =
    `
     node todo.js help
     node todo.js list # melihat daftar TODO
     node todo.js add <task_content> # menambahkan TODO ke dalam list
     node todo.js findById <task_id> # melihat detail TODO sesuai task_id nya
     node todo.js delete <task_id> # menghapus TODO sesuai task_id nya
     node todo.js complete <task_id> # menandai status TODO selesai
     node todo.js uncomplete <task_id> # menandai status TODO belum selesai`
     return console.log(help);
  }

  static dataView(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].status) {
        console.log(`${i+1}. [X] ${data[i].task}`);
      }
      else {
        console.log(`${i+1}. [ ] ${data[i].task}`);
      }
    }
  }

  static lastData(data) {
    for (let i = 0; i < data.length; i++) {
      if (i === data.length-1) {
        return data[i]
      }
    }
  }

  static dataById(id, data) {
    return console.log(`${id}. ${data.task}`);
  }

  static successAddTask(data) {
    return console.log(`Added "${this.lastData(data).task}" to your TODO list...`);
  }

  static successDeleteTask(data) {
    return console.log(`Deleted "${data.task}" from your TODO list...`)
  }

  static complete(id) {
    return console.log((`task ${id} marked as complete`));
  }

  static uncomplete(id) {
    return console.log((`task ${id} marked as uncomplete`));
  }

  static successAddTags(data, arr) {
    return console.log(`Tagged task ${data.task} with tags: ${arr.join(" ")}`);
  }

  static filterData(data) {
    data.forEach(function(filter) {
      console.log(`${filter.id}. ${filter.task} [${filter.tags}]`);
    })
  }
}

module.exports = View