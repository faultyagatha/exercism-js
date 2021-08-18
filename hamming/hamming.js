export const compute = (dna1, dna2) => {
  if (dna1.length !== dna2.length) {
    throw new Error('left and right strands must be of equal length')
  }
  if (dna1.length === 0) {
    new Error('left strand must not be empty');
  }
  if (dna2.length === 0) {
    new Error('right strand must not be empty');
  }
  let counter = 0;
  for (let i = 0; i < dna1.length; i++) {
    if (dna1[i] !== dna2[i]) {
      counter++;
    }
  }
  return counter;
};
