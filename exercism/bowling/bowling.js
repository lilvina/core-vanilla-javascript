var Bowling = function(rolls){
  this.rolls = rolls
}

Bowling.prototype.score = function() {
  var total = 0
  var totalFrameScore = 0
  var numberOfRollsInFrame = 0

  for(var i = 0; i < this.rolls.length; i++) {
     total += this.rolls[i]
     numberOfRollsInFrame++
     totalFrameScore += this.rolls[i]

     if (numberOfRollsInFrame === 2 && totalFrameScore === 10) {
      // spare
      total += this.rolls[i + 1]
     } else if (numberOfRollsInFrame === 1 && totalFrameScore === 10) {
      // strike
      total += this.rolls[i + 1] + this.rolls[i + 2]
     }

     if (totalFrameScore === 10 || numberOfRollsInFrame === 2) {
      totalFrameScore = 0
      numberOfRollsInFrame = 0
     }

     // if(numberOfRollsInFrame[10] === 1 
     //  && totalFrameScore === 10) {
     //  total += this.rolls[i + 1] + this.rolls[i + 2]
     // }

     // if(this.rolls[i] === 10) {
     //  this.score = this.rolls * 2
     //  return this.rolls[i]
     // }
  }
  return total
}

module.exports = Bowling






// class Bowling {
//   constructor () {
//     this.score = 0
//   }
// }

// var Bowling = function() {
//   this.score = 0
// }



// var bowling = new Bowling()

// bowling.score //0