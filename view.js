class View {

    static viewHelp () {
        console.log('node todo.js');
        console.log('node todo.js help');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_id>');
        console.log('node todo.js delete <task_id>');
        console.log('node todo.js complete <task_id>');
        console.log('node todo.js uncomplete <task_id>');
    }

    static viewList (data) {
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].id}. ${data[i].task}`);
        }
    }

    static viewAdd(data) {
        console.log(`Added "${data}" to your TODO list...`)
    }
}

module.exports = View;