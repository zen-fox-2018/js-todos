const View = require('./View.js')
const List = require('./List.js')

class Controller {
  static menuHelp() {
    View.help()
  }

  static menuError() {
    View.error()
  }

  static menuList(sort = 'asc', type = null) {
    let output = List.showList(sort, type)
    View.showList(output)
  }

  static menuAdd(newList) {
    List.addList(newList)
    View.showAdd(newList)
  }

  static menuFindById(index) {
    let output = List.showList()
    View.findById(index ,output)
  }

  static menuDelete(index) {
    let output = List.showList()
    View.delete(index, output)
    List.deleteById(index)
  }

  static menuComplete(index, boolean) {
    let output = List.completed(index, boolean)
    View.showList(output)
  }

  static menuTag(index, tag) {
    let output = List.addTag(index, tag)
    View.showTag(output, tag)
  }

  static menuFilter(argv) {
    let output = List.filterTag(argv.slice(7))
    View.showFilter(output)
  }
}

module.exports = Controller
