
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const brackRight = ["]", ")", "}"];
  const brackLeft = ["[", "(", "{"];
  let result =  true;
  for (let i of s) {
    if (brackLeft.includes(i)) {
      stack.push(i);
    } else {
      const left = stack.pop();
      const LeftIdx  =  brackLeft.indexOf(left)
      const RightIdx  =  brackRight.indexOf(i)
      if(LeftIdx !== RightIdx  ){
        result = false;
        break
      }
    }
  }
  if(stack.length !== 0) {
    result = false;
  }
  return result;
};
