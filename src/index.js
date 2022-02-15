
// function towelSort(matrix) {
 

// }


module.exports = function towelSort(matrix) {
  let arr1 = [];
  
  if (!matrix || matrix.length === 0) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0 || i === 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          arr1.push(matrix[i][j]);
        }
      } else {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          arr1.push(matrix[i][j]);
        }
      }
    }
    return arr1;
  }
}
