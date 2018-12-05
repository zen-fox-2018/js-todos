
const Controller = require("./controller.js")

class View {

    static callHelp () {
        console.log('$ node todo.js')
        console.log('$ node todo.js help')
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js findById <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js <task_id>')
        console.log('$ node todo.js <task_id>')
    }

    static showList (input) {
        for (let i = 0; i < input.length; i++) {
            console.log(`${i+1} ${input[i].task}`)
        }
    }

    static findById (input,id) {
        let check = false
        for(let i = 0; i < input.length; i++) {
            if(i+1 == id){
                console.log(`${i+1} ${input[i].task}`)
                check = true
            }
        }
        if(!check) {
            console.log('Id tidak ada')
        }

    }

    static sucsessInput() {
        console.log('sukses')
    }

    static erorrInput () {
        console.log('eror')
    }

}



module.exports = View