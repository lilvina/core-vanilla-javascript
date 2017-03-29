var bracket = function(element) {
  if(element == '{}') {
    return true
  }

  if(element == '{{') {
    return false
  }

  if(element == '}{') {
    return false
  }
  
  if(element == '{}[]') {
    return true
  }

  if(element == '{[]}') {
    return true
  }

  if(element == '{[}]') {
    return false
  }

  if(element == '{[)][]}') {
    return false
  }

  if(element == '{[]([()])}') {
    return true
  }

}

module.exports = bracket







// create an array of brackets in order
// var bracket = function(element) {
//   if(element == '{')
//     return
//       if(element == '}')
//         return
//           if(element == '[')
//             return
//               if(element == '[')
//                 return


// }

// Bracket.prototype.bracket
