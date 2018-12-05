const ToDoModel = require('./todoModel.js')
const ToDoView = require('./todoView.js')

class ToDoController{
    static getData(){
        let ToDoData = ToDoModel.parseFile()
        ToDoView.displayData(ToDoData)
    }

    static help(){
        ToDoView.displayCommandList()
    }

    static list(){
        let ToDoData = ToDoModel.parseFile()
        ToDoView.displayToDoList(ToDoData)
    }

    static add(data){
        ToDoView.displayAddedTask(data)
        ToDoModel.add(data)
    }

    static FindById(id){
        let ToDoData = ToDoModel.parseFile()
        ToDoView.displayTaskByID(id, ToDoData[id-1].task)
    }

    static delete(id){
        let ToDoData = ToDoModel.parseFile()
        ToDoModel.delete(id)
        ToDoView.displayDeletedTask(ToDoData[id-1].task)
    }

    static complete(id){
        let ToDoData = ToDoModel.parseFile()
        ToDoData[id-1].completed = true
        ToDoData[id-1].completedAt = true
        ToDoModel.save(ToDoData)
        ToDoView.displayToDoList(ToDoData)
    }

    static uncomplete(id){
        let ToDoData = ToDoModel.parseFile()
        ToDoData[id-1].completed = false
        ToDoModel.save(ToDoData)
        ToDoView.displayToDoList(ToDoData)
    }

    static listCreated(sortOrder){
        let ToDoData = ToDoModel.parseFile()
        let asc = ToDoData.sort()
        let desc = ToDoData.sort(function(a,b){return b-a})

        if(sortOrder == 0 || sortOrder == 'asc'){
            ToDoView.displayToDoList(asc)
        }   else{
            ToDoView.displayToDoList(desc)
        }
    }

    static tag(argv){
        let ToDoData = ToDoModel.parseFile
        ToDoView.displayTag(ToDoData, argv)
    }

}

module.exports = ToDoController