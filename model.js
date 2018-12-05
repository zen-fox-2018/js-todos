const fs = require('fs');
const Controller = require("./controller.js")

class ToDO {

    constructor (task) {
        this.task = task
    }

    static readfile() {
        const file = fs.readFileSync('./data.json', "utf8");
        return file
    }

    static showList() {
        let data = JSON.parse(this.readfile())
        let result = []
        for(let i = 0; i < data.length; i++) {
            let obj = new ToDO
            result.push(obj)
        }
        return data
    }

    static addTask (input) {
        let data = this.showList()
        data.push(input)
        let string = JSON.stringify(data, null, 2)
        this.writeFile(string)
        return this.showList()
    } 
    
    static delete (input) {
        let data = this.showList()
        let task = 

        return data
    }

    static writeFile (input) {
        fs.writeFileSync('./data.json', input)
    }

    
}


module.exports = ToDO