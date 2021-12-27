export default function getMatrix() {
    let x = 10,
      y = 10;
    let matrix = [];
    for (let i = 0; i < x; i++) {
      matrix[i] = [];
      for (let j = 0; j < 10; j++) {
        matrix[i][j] = 0;
      }
    }
    return matrix;
  }