//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let result = "";
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter === 0) {
        result += str[i];
      } else {
        result += (counter + str[i]);
        counter = 0;
      }
    }
  }
  return result;
};

export const decode = (str) => {
  let result = "";
  let count = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i]))) {
      count += str[i];
    } else {
      if (count.length < 1) {
        result += str[i];
      } else {
        result += str[i].repeat(count);
        count = "";
      }
    }
  }
  return result;
};
