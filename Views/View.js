class View {
    static showData(data) {
        data.length == 0 ?
            console.log(`No TODO list available`) :
            data.forEach(element => {
                let check = `[ ]`
                element.status == true ?
                    check = `[x]` : check = `[ ]`
                console.log(`${element.id}. ${check} ${element.taskName}`);
            })
    }

    static showError(err) {
        console.log(err);
    }

    static successWrite(data) {
        console.log(`Added "${data}" to your TODO list..`);
    }

    static showOne(obj) {
        console.log(`${obj.id}. ${obj.taskName}`);
    }

    static successDelete(data) {
        console.log(`Deleted "${data.taskName}" to your TODO list..`);
    }

}

module.exports = View