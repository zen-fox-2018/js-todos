
class View {
    static help() {
        // console.log("will call help")
        console.log("=========== HELP ===============")
        console.log("node todo.js help");
        console.log("node todo.js list");
        console.log("node todo.js add <task_content>");
        console.log("node todo.js findById <task_id>");
        console.log("node todo.js delete <task_id>");
        console.log("node todo.js complete <task_id>");
        console.log("node todo.js uncomplete <task_id>");
        // console.log("node todo.js list:created asc|desc");
        // console.log("node todo.js list:completed asc|desc");
        // console.log("node todo.js atg <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>");
        // console.log("node todo.js fileter: <tag_name>");
    }

    static addData(data) {
        console.log(`Added ${data.task} to your TODO list ...`)
    }

    static showList(data) {
        console.log("======== TODO LIST ========")
        data.forEach(element => {
            console.log(`${element.id}. ${element.task}`)
        });
    }

    static showFindById(data) {
        console.log(`${data.id}. ${data.task}`)
    }

    static showDelete(data) {
        // console.log(data)
        console.log("Successfully deleted!")
    }

    static showCompleted(data) {
        console.log("======= TASK CHECK ========")
        data.forEach(element => {
            if(element.completed === true) {
                console.log(`${element.id}. [x] ${element.task}`)
            } else if (element.completed === false) {
                console.log(`${element.id}. [ ] ${element.task}`)
            }
        })
    }
}

module.exports = View