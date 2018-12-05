class View {
  static help() {
    console.log(`Welcome! This is YOUR TO DO LIST APP
      these are menu that you can type:
      1. 'node todo.js help' <=== This is where you are
      2. 'node todo.js list <option>' # Will show all of your TO DO list
      3. 'node todo.js add <task_content>' # Will add the task to your list
      4. 'node todo.js findById <task_id>' # Will search your task by ID
      5. 'node todo.js delete <task_id>' # Will delete your task by ID
      6. 'node todo.js complete <task_id>' # Will mark [x] your task
      7. 'node todo.js uncomplete <task_id>' # Will unmark [ ] your task
      `)
  }

  static showList(list) {
    console.log('Your to do list');
    for (let i = 0 ; i < list.length ; i++) {
      console.log(`${i+1}. ${this.completed(list[i])} ${list[i].task}`);
    }
    // console.log(list);
  }

  static showTag(list) {

  }

  static completed(list) {
    if (list.status === true) {
      return '[x]'
    } else {
      return '[ ]'
    }
  }

  static showAdd(list) {
    console.log(`Added "${list}" to your TO DO list...`);
  }

  static findById(search ,output) {
    let result = output.filter(a => a['id'] == search);
    console.log(`${result[0].id}. ${result[0].task}`);
  }

  static delete(search, output) {
    let result = output.filter(a => a['id'] == search);
    console.log(`Deleted "${result[0].task}" from your TO DO list...`);
  }

  static showTag(output, tag) {
    console.log(`Tagged task "${output.task}" with tags: ${tag}`);
  }

  static showFilter(output) {
    for (let i = 0 ; i < output.length ; i++) {
      console.log(`${output[i].id}. ${output[i].task} [${output[i].tag}]`)
    }
  }
}

module.exports = View
