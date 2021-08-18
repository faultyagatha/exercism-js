export const toRoman = (num) => {
  if (isNaN(num)) return NaN;
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let str = '';

  for (let i in lookup) {
    const numRepeats = Math.floor(num / lookup[i]);
    num -= numRepeats * lookup[i];
    str += i.repeat(numRepeats);
  }
  return str;
};
