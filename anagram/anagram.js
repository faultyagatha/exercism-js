export const findAnagrams = (word, wordsArr) => {
  if (wordsArr.lenght === 0 || word.length === 0) {
    return -1;
  }
  const result = [];
  for (let i = 0; i < wordsArr.length; i++) {
    const w = anagram(word, wordsArr[i]);
    if (w !== -1) {
      result.push(w);
    }
  }
  return result;
};

const anagram = (word, w) => {
  if (word.length !== w.length) {
    return -1;
  }
  const freqMap = {};
  for (let i = 0; i < word.length; i++) {
    freqMap[word[i].toLowerCase()] = (freqMap[word[i].toLowerCase()] || 0) + 1;
  }

  for (let i = 0; i < w.length; i++) {
    if (!freqMap[w[i].toLowerCase()]) {
      return -1;
    }
  }
  return w;
};
