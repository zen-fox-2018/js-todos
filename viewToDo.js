class ViewToDo {
    static argvHelp(input) {
        console.log(`Anda memanggil bantuan, silahkan melihat panduan di bawah ini untuk digunakan:`)
        console.log(input);
    }
    static lists(input) {
        console.log(`Berikut adalah tugas yang harus Anda lakukan: `)
        for (let i = 0; i < input.length; i++) {
            if (input[i].isCompleted) {
                console.log(`[x] ${input[i].id}. ${input[i].task}`)
            }
            else {
                console.log(`[ ] ${input[i].id}. ${input[i].task}`)
            }
        }
    }
    static toDoAdded(task) {
        console.log(`Added ${task} to your TODO list...`)
    }
    static showById(task, data) {
        for (let i = 0; i < data.length; i++) {
            if (task == data[i].id) {
                console.log(`${data[i].id}. ${data[i].task}`)
            }
        }
    }
    static deleteTask(id) {
        console.log(`Deleted ${id} from your TODO list...`)
    }
    static completedTask(id) {
        console.log(`Task ${id} has completed!`)
    }
    static uncompletedTask(id) {
        console.log(`Task ${id} is uncomplete!`)
    }
    static sortByDate(data, sortAs) {
        if (sortAs == undefined || sortAs == 'asc') {
            for (let j = 0; j < data.length; j++) {
                console.log(`${data[j].id}. ${data[j].task}`)
            }
        }
        else {
            for (let i = data.length - 1; i >= 0; i--) {
                console.log(`${data.length - i}. ${data[i].task}`)
            }
        }
    }
}

module.exports = ViewToDo