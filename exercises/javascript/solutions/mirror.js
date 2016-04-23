function mirror (word) {
  var mirroredWord

  if (word) {
    mirroredWord = word + '|'

    var lastCharPosition = word.length - 1

    while (lastCharPosition >= 0) {
      mirroredWord += word[lastCharPosition]
      lastCharPosition--
    }
  }

  return mirroredWord
}

var mirroredWord = mirror('mississippi')
console.log(mirroredWord)
