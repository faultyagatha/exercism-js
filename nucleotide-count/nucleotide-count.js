export class NucleotideCounts {
  static parse(str) {
    const dnaMap = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    };

    if (str.length === 0) return Object.values(dnaMap).join(" ");
    for (let i = 0; i < str.length; i++) {
      if (dnaMap.hasOwnProperty(str[i])) dnaMap[str[i]]++;
      else throw new Error('Invalid nucleotide in strand');
    }
    return Object.values(dnaMap).join(" ");
  }
}
