
class ToDoView {
    static displayData(data) {
        console.log('All data:')
        console.log(data)
    }

    static displayCommandList() {
        console.log('$ node tode.js ')
        console.log('$ node tode.js help')
        console.log('$ node tode.js list')
        console.log('$ node tode.js add <task_content>')
        console.log('$ node tode.js findById <task_id>')
        console.log('$ node tode.js complete <task_id>')
        console.log('$ node tode.js uncomplete <task_id>')
    }

    static displayToDoList(data){
        for( let i = 0; i < data.length; i++){
            if(data[i].completed){
                console.log(`${i+1}. [X] ${data[i].task}`)
            }   else{
                console.log(`${i+1}. [ ] ${data[i].task}`)
            }
        }
    }

    static displayAddedTask(data){
        console.log(`added "${data}" to your TODO list...` )
    }

    static displayTaskByID(id, task){
        console.log(`${id}. ${task}`)
    }

    static displayDeletedTask(task){
        console.log(`deleted "${task}" from your TODO list... `)
    }

    static displayTag(argv, )


}

module.exports = ToDoView