
const fs = require("fs");

class Model {

    constructor(id, task) {
        this.id = id;
        this.completed = false;
        this.task = task;
        // this.created_at = new Date();
        // this.completed = new Date();
    }

    static readFile() {
        const data = fs.readFileSync("./data.json", "utf8");
        let parsed = JSON.parse(data);

        return parsed;
    }

    static writeFile(data) {
        data = JSON.stringify(data, null, 2);
        let write = fs.writeFileSync("./data.json", data);
        return write;
    }

    static list() {
        let result = []
        let data = Model.readFile();
        for(let i = 0; i < data.length; i++) {
            result.push(new Model(data[i].id, data[i].task));
        }
        return result;
    }

    static addToDos(task) {
        let readData = Model.readFile();
        let id = null;

        if(readData.length === 0) {
            id = 1;
        } else {
            id = readData[readData.length - 1].id + 1;
        }

        let data = new Model(id, task);
        data.save();

        return data;
    }

    save () {
        let data = Model.list();
        data.push(this);
        Model.writeFile(data);
    }

    static findOne(input) {
        let data = Model.readFile();
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === input) {
                return data[i];
            }
        }
    }

    static findById(id) {
        let data = Model.findOne(id);

        return data;
    }

    static deleteById(id) {
        let data = Model.readFile();
        let findId = Model.findOne(Number(id))
        for(let i = 0; i < data.length; i++) {
            if(data[i].id === findId) {
                data.splice(i, 1);
            }
        }
        Model.writeFile(data);
    }

    static completedCheck (command, completedId) {
        let data = Model.readFile();
        let findId = Model.findOne(Number(completedId));

        for(let i = 0; i < data.length; i++) {
            if(command === "completed") {
                if(data[i].id === findId.id) {
                    data[i].completed = true
                }
            } else if (command === "uncompleted"){
                if(data[i].id === findId.id) {
                    data[i].completed = false
                }
            }
        }
        Model.writeFile(data)
        return data
    }
}

module.exports = Model

// let test = {"id": id, "task": toDo};
// data.push(test)
// this.writeFile(data)