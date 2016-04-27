var todos = ['do something']
var input = prompt('What would you like to do?')

while (input !== 'quit') {
  if (input === 'list') {
    printList(todos)
  } else if (input === 'add') {
    var newTodo = prompt('Enter new todo')
    todos.push(newTodo)
    printList(todos)
  } else if (input === 'delete') {
    var index = prompt('Enter the index of the item you want to delete')
    var item = todos.splice(index, 1)
    console.log(item[0] + ' deleted')
    printList(todos)
  }

  // ask again what you would like to do
  input = prompt('What would you like to do?')
}

function printList (list) {
  // console.log(list)
  console.log('TODO List')
  console.log('-----------------------')
  for (var i = 0; i < list.length; i++) {
    console.log(i + ': ' + list[i])
  }
  console.log('')
}

console.log('Exiting the app')
