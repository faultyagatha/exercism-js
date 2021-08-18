export const decodedValue = ([color1, color2]) => {
  const codeIndex1 = COLORS.indexOf(color1);
  const codeIndex2 = COLORS.indexOf(color2);
  return Number(codeIndex1 * 10 + codeIndex2);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];