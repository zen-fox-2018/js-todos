class view {
  static help(){
    console.log('help => menampilkan bantuan');
    console.log('list => menampilkan daftar todo');
    console.log('add <task_content> => menambahkan daftar todo');
    console.log('findById <task_id> => menampilkan todo sesuai task_id');
    console.log('delete <task_id> => menghapus todo sesuai task_id');
    console.log('complete <task_id> => menandai status selesai pada todo');
    console.log('uncomplete <task_id> => menandai status belum selesai pada todo');
  }

  static showList(dataFromModel){
    // console.log(dataFromModel.dataParsed[0].id);
    // console.log(dataFromModel);
    for (var i = 0; i < dataFromModel.length; i++) {
      console.log(dataFromModel[i].id +' : ' +dataFromModel[i].task);
    }
  }

  static showById(dataFromModel){
    // console.log(dataFromModel);
    if (dataFromModel == -1) {
      console.log('index tidak ditemukan');
    }else{
      console.log(dataFromModel.id + ' : ' + dataFromModel.task);
    }
  }

  static addListVerification(){
    console.log('list addded!');
  }

  static deleteIndexVerification(bool){
    if (bool === true) {
      console.log('task deleted!');
    }
    else {
      console.log('failed!');
    }

  }
}

module.exports = view;
