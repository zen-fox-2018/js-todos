

class TodoView {

    
    static displayDeletedList(stuff){
        console.log(`output delete:`)
        console.log(`Deleted ${stuff} from your TODO list`)
    }

    static displayListFromId(number, object){
        console.log(`output FindById :`)
        for (let i = 0; i < object.length; i++ ){
            // console.log(object[i].id , number)
            if( object[i].id == number){
                console.log(`${object[i].id}. ${object[i].task}`)
            }
        }
    }

    static displayList(object){
        console.log(`//output list :`)        
        for (let i = 0; i < object.length; i++ ){
            let checkbox = ''
            if(object[i].completed == false){
                checkbox = `[   ]`
            }
            else {
                checkbox = `[ X ]`
            }
            console.log(`${checkbox} ${object[i].id}. ${object[i].task} `)
        }
    }

    static displayAddedList(stuff){
        console.log(`//output dari add list :`)
        console.log(`Added ${stuff} to your TODO list...`)
    }

    static displayHelp () {
        console.log('$ node todo.js')
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')

    }
}

module.exports = TodoView