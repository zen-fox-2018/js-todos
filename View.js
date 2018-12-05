class View {
  static display(msg , data) {
    if (!data) {
      console.log(msg)
    } else {
      console.log(msg , '\n' , data)
    }
  }

  static help() {
    console.log(`
    ====== AVAILABLE COMMAND ======
    node todo.js help
    node todo.js list
    node todo.js add <task_content>
    node todo.js findById <task_id>
    node todo.js delete <task_id>
    node todo.js complete <task_id>
    node todo.js uncomplete <task_id>
    node todo.js list:created asc | desc
    node todo.js list:completed asc | desc
    node todo.js tag <id> <name> <name>
    node todo.js filter:<tag_name>
    `)
  }

  static list(data, opt) {
    for (let i = 0; i < data.length; i++) {
      let status = ' '
      if (data[i].complete == true) {
        status = 'X'
      }
      console.log(`${data[i].id}.[${status}] ${data[i].task}.`)      
    }
  
  }

  static createDesc(data) {
    for (let i = data.length-1; i >= 0; i--) {
      let status = ' '
      if (data[i].complete == true) {
        status = 'X'
      }
      console.log(`${data[i].id}.[${status}] ${data[i].task}`)  
    }
  }

  static complist(data , opt) {
    let result = []
    if (opt == 'asc') {
      data.sort(function(a,b){
        var c = new Date(a.completeDate);
        var d = new Date(b.completeDate);
        return d-c;
        });
      result = data
    } else {
      data.sort(function(a,b){
        var c = new Date(a.completeDate);
        var d = new Date(b.completeDate);
        return c-d;
        });
      result = data
    }
    this.list(data)
  }
}
module.exports = View