const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export const isPangram = (sentence) => {
  const formatted = sentence.replace(/\W/g, '').toLowerCase();
  if (formatted.length === 0 ||
    formatted.length < alphabet) { return false; }
  if (![...alphabet].every(item => formatted.includes(item))) return false;
  return true;
};


