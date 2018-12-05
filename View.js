
class View {
    static getHelp() {
        console.log('$ node todo.js help');
    }

    static getMethodHelp() {
        console.log('$ node todo.js ');
        console.log('$ node todo.js help');
        console.log('$ node todo.js add <task_content>');
        console.log('$ node todo.js fineById <task_id>');
        console.log('$ node todo.js delete  <task_id>');
        console.log('$ node todo.js complete  <task_id>');
        console.log('$ node todo.js uncomplete  <task_id>');
        console.log('$ node todo.js list:created asc|desc');
        console.log('$ node todo.js list:completed asc|desc');
        console.log('$ node todo.js tag <tas_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
        console.log('$ node todo.js filter:<tag_name>');
        

    }

    static getViewList(data){
        for(let i = 0 ; i < data.length; i++){
            if(data[i].status == true){
                console.log(`${i+1}. [X] ${data[i].task}`);
                } else{
                console.log(`${i+1}. [ ] ${data[i].task}`);
                }
        }
    }

    static getAddStatus(data){
         console.log (`Added "${data}" to your TODO list... `)
    }

    static getFindById(data,searchId){
        if(data.length < searchId) {
            console.log(`Process yang berlangsung hanya ada ${data.length}`);    
        }
        
        for(let i = 0; i < data.length; i ++){
            if(i + 1 == searchId){
                if(data[i].status == true){
                console.log(`${i+1}. [X] ${data[i].task}`);
                } else{
                console.log(`${i+1}. [ ] ${data[i].task}`);
                }
            }
        }
    }

    static getDeleteStatus(data, dataId){
        if(data.length < dataId) {
            console.log(`Delete gagal karena process yang berlangsung hanya ada ${data.length}`);    
        }
        for(let i = 0 ; i < data.length; i++){
            if(i + 1 == dataId){
                console.log(`Deleted "${data[i].task}" from your TODO list...`);
            }
        }

    }
}

module.exports = View