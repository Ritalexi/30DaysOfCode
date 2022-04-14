function pascalTriangle(numRows){
    if (numRows === []) return [];
    if (numRows === [1]) return [[1]];
    const result = [];
for(let row = 1; row <= numRows; row++){
    let arr = [];
    for(let col = 0; col < row; col++){
if(col === 0 || col === row - 1){
    arr.push(1);
} else{
    arr.push((result[row - 2][col - 1] + result[row - 2][col]));
}
    }
    result.push(arr);
}
return result;
}
console.log(pascalTriangle([4]));