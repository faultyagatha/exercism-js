export const isIsogram = (str) => {
  if (str.length === 0) { return true; }
  let freqCounter = {};
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (freqCounter[lower[i]] && lower[i] !== "-" && lower[i] !== " ") {
      return false;
    }
    freqCounter[lower[i]] = freqCounter[lower[i]] || 0 + 1;
  }
  return true;
};
