
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let row = [];
  if (Array.isArray(matrix)) {
 
      for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
          if ( i % 2 == 0) {
            row.push(matrix[i][j]);
        } else {
          row.push(matrix[i][matrix[i].length-j-1]);
        }
      }
    }
    
  }
  return row;
}
 