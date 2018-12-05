class View {

    static displayAllCommand() {
        console.log(`
        ======== All Command ==========
        node todo.js
        node todo.js help
        node todo.js list
        node todo.js add <task_content>
        node todo.js findById <task_id>
        node todo.js delete <task_id>
        node todo.js complete <task_id>
        node todo.js uncomplete <task_id>`)
    }

    static displayList(data) {
        console.log("===== Task List =====")
        data.forEach(todo => {
            if(todo.Complete === false) {
                console.log(`${todo.id}. [ ] ${todo.task}`)
            } else {
                console.log(`${todo.id}. [x] ${todo.task}`)
            }
        });
    }

    static SuccessSave(data) {
        console.log(`Added ${ data.task} to your TODO list ...`)
    }

    static displayOneTask(data) {
        console.log(`${data.id}. ${data.task}`)
    }

    static displayNotFound() {
        console.log('Data not found')
    }

    static SuccessDelete(task) {
        console.log(`Deleted ${task} from your TODO list ...`)
    }

    static displayError(input) {
        console.log(`cant do the command because task already ${input}`)
    }

    static successAddTag(object) {
        console.log(`Tagged task ${object.task} with tags: ${object.tag.join(" ")}`)

    }

    static filter(data) {
        data.forEach(task => {
            console.log(`${task.id}. ${task.task} ${task.tag}`)
        })
    }

}

module.exports = View