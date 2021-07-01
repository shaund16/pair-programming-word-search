////PAIR PROGRAMMING THIS PROJECT WITH MATTHEW MCLEOD/////////

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = letters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let returnMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    returnMatrix.push([]);
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      returnMatrix[col][row] = matrix[row][col];
    }
  }
  return returnMatrix;
};
  
module.exports = wordSearch;