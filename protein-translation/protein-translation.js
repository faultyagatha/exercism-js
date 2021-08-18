export const translate = (sequence) => {
  const proteinMap = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };
  if (sequence.length < 3) return [];
  let proteins = [];
  let result = [];
  const step = 3;
  for (let i = 0; i < sequence.length; i += step) {
    //chunk the sequence into an array of 3 chars
    proteins.push(sequence.substr(i, step));
  }
  for (let i = 0; i < proteins.length; i++) {
    //account for invalid codons
    if (!proteinMap[proteins[i]]) {
      throw new Error('Invalid codon');
    }
    //create an array of translated proteins
    result.push(proteinMap[proteins[i]]);
  }
  //account for stop codons
  if (result.includes('STOP')) {
    return result.slice(0, result.indexOf('STOP'));
  }
  return result;
};
