module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (i=0; i<str.length; i+=1) {
    let idxConfig = null
    bracketsConfig.forEach((el, idx) => {
      if (el.includes(str[i])) {
        idxConfig = idx
      }
    });
    if ((str[i] === bracketsConfig[idxConfig][0]) && (bracketsConfig[idxConfig][0] === bracketsConfig[idxConfig][1])) {
      if (stack[stack.length-1] !== bracketsConfig[idxConfig][0]) {
        stack.push(str[i])} else if (stack[stack.length-1] === bracketsConfig[idxConfig][0]) {
        stack.pop()
      }
    }
    if (str[i] === bracketsConfig[idxConfig][0]) {
      stack.push(str[i])
    }
    if (str[i] === bracketsConfig[idxConfig][1]) {
      if (stack[stack.length-1] === bracketsConfig[idxConfig][0]) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}