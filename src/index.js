
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrInput = (matrix !== null && matrix !== undefined) ? matrix : [];
  let array = [];  

  for (let i = 0; i < arrInput.length; i++) {
     array = (i % 2 === 0) ? array.concat(matrix[i].sort((a, b) => a - b)) : array.concat(matrix[i].sort((a, b) => b - a)) ;    
  }
  
  return array;
}
