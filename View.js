class View {
    static help() {
        console.log("Commands List: ");
        console.log("-help ==> show commands list");
        console.log("-list ==> view ToDo list");
        console.log("-add <task_content> ==> add content to your ToDo list");
        console.log("-findByID <task_id> ==> view your ToDo based on task id");
        console.log("-complete <task_id> ==> mark completed task");
        console.log("-uncomplete <task_id> ==> mark uncomplete task");
    }
    static list(data) {
        let theList = "";
        for (let i = 0; i <= data.length-1; i++) {
            theList += `${data[i].id}. ${data[i].toDo}`
            if (i !== data.length-1) {
                theList += "\n";
            }
        }
        console.log("Your ToDo list: ");
        console.log(theList);
    }
    static addedToDo(data) {
        console.log(`Added ${data} to your ToDo list...`)
    }
    static findById(data, id) {
        for (let i = 0; i <= data.length-1; i++) {
            if (data[i].id == id) {
                console.log(`${data[i].id}. ${data[i].toDo}`)
            }
        }
    }
    static deleteData(task, data) {
        for (let i = 0; i <= data.length-1; i++) {
            if (data[i].id == task) {
                console.log(`Deleted ${data[i].toDo} from your ToDo list...`)
            }
        }
    }
  
}

module.exports = View;
