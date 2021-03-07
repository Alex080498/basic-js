const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let cats = '^^';
  let countCats = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === cats) {
        countCats++;
      }
  }
}
  return countCats;
};