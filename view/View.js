class View {
    static displayHelp() {
        console.log('$ node todo.js')
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js list:created asc|desc')
        console.log('$ node todo.js list:completed asc|desc')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')
        console.log('$ node todo.js tag <task_1> <tag_name_1> ...')
        console.log('$ node todo.js filter <tag_name>')
    }

    static displayAllTask(data) {
        console.log('===== ToDo List =====')
        console.log(data)
    }

    static displayId(data) {
        console.log('Task Found:')
        console.log(data)
    }

    static displayIdFailed(msg) {
        console.log(msg)
    }

    static displaySuccess(msg) {
        console.log(msg)
    }
}

module.exports = View