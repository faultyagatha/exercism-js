export const steps = (num) => {
  if (num <= 1) return 0;
  let steps = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num * 0.5;
      steps++;
    } else {
      num = num * 3 + 1;
      steps++;
    }
    return steps;
  }
};
