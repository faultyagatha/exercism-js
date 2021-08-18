const translationMap = {
  G: "C",
  C: "G",
  T: "A",
  A: "U"
};

export const toRna = (dnaStr) => {
  if (dnaStr.length === 0) return "";
  let rnaStr = "";
  for (let i = 0; i < dnaStr.length; i++) {
    if (translationMap[dnaStr[i]]) {
      rnaStr += translationMap[dnaStr[i]];
    }
  }
  return rnaStr;
};
