class View {

    static showHelp() {
        console.log(`Berikut adalah list command yang dapat digunakan : ${'\n'}
$ node todo.js
$ node todo.js help
$ node todo.js list
$ node todo.js add <task_content> 
$ node todo.js findById <task_id>
$ node todo.js delete <task_id>
$ node todo.js complete <task_id>
$ node todo.js uncomplete <task_id>`)
    }

    static showList(input) {
        console.log('To do list :')
        for (let i = 0; i < input.length; i++) {
            console.log(input[i])
        }
    }

    static showAddedData(input) {
        console.log(`Added "${input}" to your TODO list...`)
    }

    static showFindId(getID) {
        console.log(getID)
    }

    static showDeleted(input) {
        console.log(`Deleted "${input}" from your TODO list...`);
    }

    static showUndefined() {
        console.log(`Silahkan tuliskan input seperti di bawah ini : ${'\n'}$ node todo.js help`);
    }
}

module.exports = View