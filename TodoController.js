const TodoModel = require ('./TodoModel.js')
const TodoView = require ('./TodoView.js')

class TodoController {
    static showList(){
        // TodoModel.parseFile()
        TodoView.displayList(TodoModel.parseFile())
    }

    static showHelp(){
        TodoView.displayHelp()
    }

    static addList(stuff) {
        TodoModel.inputStringToDatabase(stuff)
        TodoView.displayAddedList(stuff)
    }

    static findById(id) {
        TodoView.displayListFromId(id, TodoModel.parseFile())
    }

    static deleteById(id) {
        let data = TodoModel.parseFile()
        let deletedData = {}
        for (var i = 0; i < data.length; i++){
            if(data[i].id == id){
                deletedData = data[i]
            }
        }
        
        TodoView.displayDeletedList(deletedData.task)
        TodoModel.deleteById(id)
    }

    static completedById(id){
        //mengubah status completed dari false menjadi true
        // dan mewrite ke dalam database
        TodoModel.modelCompletedById(id)
        this.showList()
    }

    static uncompletedById(id) {
        TodoModel.modelUncompletedById(id)
        this.showList()
    }

    static sortingByCreated(order){
        let data = TodoModel.parseFile()
        data.sort(function (a,b){
            if(order == 'asc' || order === '') {
                return a.created > b.created
            }
            else if(order == 'desc') {
                return a.created < b.created
            }            
        })
        TodoView.displayList(data)        
        
    }
}

// console.log(TodoController.deleteById(3))

module.exports = TodoController