class TodoView {
    static displayHelp() {
        console.log('=============== help ===============');
        console.log('$ node todo.js')
        console.log('$ node todo.js help');
        console.log('$ node todo.js list');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js findById <task_id>');
        console.log('$ node todo.js delete <task_id>');
        console.log('$ node todo.js complete <task_id>');
        console.log('$ node todo.js uncomplete <task_id>');
        console.log('$ node todo.js list:created asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
        console.log('$ node todo.js filter:<tag_name>');
    }

    static displayData(data) {
        console.log('TODO List...');
        data.forEach((task, i) => {
            if(task.status) {
                console.log(`${i+1}. id: ${task.id} [x] ${task.task}`);
            } else {
                console.log(`${i+1}. id: ${task.id} [ ] ${task.task}`);   
            }
        });
    }

    static displayOne(data) {
        if(data.status) {
            console.log(`${data.id}. [x] ${data.task}`);
        } else {
            console.log(`${data.id}. [ ] ${data.task}`);   
        }
    }

    static displayAdd(task) {
        console.log(`Added "${task}" to your TODO list`);
    }

    static displayDelete(task) {
        console.log(`Deleted "${task}" from your TODO list`);
    }
    
    static displayError(msg) {
        console.log(msg);
    }

    static displayTags(data) {
        // if (data.tags.length > 1) {
            console.log(`Tagged task "${data.task}" with tags: ${data.tags.join(' ')}`);
        // }
    }

    static displayFilter(data) {
        data.forEach(task => {
            console.log(`${task.id}. ${task.task} [${task.tags.join(', ')}]`);
            
        });
    }
}

module.exports = TodoView