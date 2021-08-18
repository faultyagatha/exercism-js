export const reverseString = (str) => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += i;
  }
  return result;
};


