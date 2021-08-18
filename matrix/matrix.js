export class Matrix {
  /** @param matrixStr: a string representing a matrix of numbers */
  constructor(matrixStr) {
    this.matrixStr = matrixStr;
  }

  get rows() {
    return parseRows(this.matrixStr);
  }

  get columns() {
    return transpose(this.rows);
  }
}

/** helper methods */
const parseRows = (matrixStr) => {
  const rows = matrixStr
    .split('\n')
    .map(e => e.split(" ")
      .map(Number));
  return rows;
}

const transpose = (rows) => {
  const columns = rows[0]
    .map((_, i) => rows
      .map(row => row[i]));
  return columns;
}