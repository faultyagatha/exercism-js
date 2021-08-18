export const isArmstrongNumber = (num) => {
  //convert number to string
  let numStr = '' + num;
  //single digit numbers are Armstrong numbers
  if (numStr.length === 1 || num === 0) return true;
  //there are no 2 digit Armstrong numbers
  if (numStr.length === 2) return false;
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    sum += Math.pow(parseInt(numStr[i]), numStr.length);
  }
  if (num === sum) return true;
  return false;
};
