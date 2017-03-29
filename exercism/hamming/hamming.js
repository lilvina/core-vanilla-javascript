var Hamming = function() {}

Hamming.prototype.compute = function (aString, bString) {
  console.log('we are running the compute function')
  if(aString == bString) {
    return 0
  }

  if(aString.length !== bString.length) {
    throw "DNA strands must be of equal length."
  }

  var counter = 0

  for(var i = 0; i < aString.length; i++) {
    if(aString[i] !== bString[i]) {
      counter++
    }
  }

  return counter



}

module.exports = Hamming