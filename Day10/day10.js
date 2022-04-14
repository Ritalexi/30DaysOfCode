function sortArr(arr1, arr2){
    let newArr = [].concat(arr1, arr2);
    for (let j = 0; j < newArr.length; j++){
        for (let i = 0; i < newArr.length; i++) {
            if(newArr[i + 1] < newArr[i]){
                var ans = newArr[i + 1];
                newArr[i + 1] = newArr[i];
                newArr[i] = ans;
            }
        }
    } 
    return newArr;
}
console.log(sortArr([1,2,7,8], [2,5,9,14]));