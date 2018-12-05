const fs = require('fs');
const Data = require('./data.json');


class Model {
  // readData
  constructor (DataParse){
    this.dataParsed = DataParse;
  }

  static readDataJSON(){
    var file = fs.readFileSync('./data.json','utf8');
    var fileParsed = JSON.parse(file);
    return fileParsed;
  }

  static showList(){
    // console.log('model');
    var data = readDataJSON();
    var newModel = new Model(data);
    return newModel;
  }

  static addListJSON(data){
    var data = Model.readDataJSON()
    var oldList = new Model(data);
    var lastID = oldList.dataParsed[oldList.dataParsed.length-1].id
    var addList = {
      "id" : lastID+1,
      "task" : data
    }
    oldList.dataParsed.push(addList);
    var newList = new Model(oldList);
    newList = JSON.stringify(newList.dataParsed.dataParsed);
    var writeDataJSON = fs.writeFileSync('./data.json',newList,'utf8');
  }

  static findById(index){
    var data = Model.readDataJSON();
    var list = new Model(data);
    // console.log(list);
    for (var i = 0; i < list.dataParsed.length; i++) {
      if (i == index) {
        return list.dataParsed[i-1];
      }
    }
    return -1;
  }

  static deleteIndex(index){
    var data = Model.readDataJSON();
    var list = new Model(data);
    var indexinList = -1;
    for (var i = 0; i < list.dataParsed.length; i++) {
      if (list.dataParsed[i].id == index) {
        var indexinList = i;
      }
    }
    if (indexinList != -1) {
      list.dataParsed.splice(indexinList,1);
      var newList = new Model(list);
      // console.log(newList);
      newList = JSON.stringify(newList.dataParsed.dataParsed);
      var writeDataJSON = fs.writeFileSync('./data.json',newList,'utf8');
      return true;
    }
    else {
      return false;
    }

  }
}

module.exports = Model;
