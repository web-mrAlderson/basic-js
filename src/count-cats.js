  
module.exports = function countCats( matrix ) {
  let number = 0;
  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[i].length; ++j) {
      number += (matrix[i][j] === "^^");
    }
  }

  return number;
};
