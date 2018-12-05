const Model = require('./model.js');
const View = require('./view.js');

class Controller {
  static displayHelp(){
    View.help();
  }

  static showList(){
    var dataParsed = Model.showList();
    View.showList(dataParsed);
  }

  static addList(data){
    Model.addListJSON(data);
    View.addListVerification();;
  }

  static findById(index){
    var dataFromModel = Model.findById(index);
    View.showById(dataFromModel);
  }

  static deleteIndex(index){
    var bool = Model.deleteIndex(index);
    View.deleteIndexVerification(bool);
    var dataFromModel = Model.readDataJSON();
    View.showList(dataFromModel);
  }
}

module.exports = Controller;
