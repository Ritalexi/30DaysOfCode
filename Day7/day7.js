function arrSort(arr){
    for (let j = 0; j < arr.length; j++){
        for (let i = 0; i < arr.length; i++) {
            if(arr[i + 1] < arr[i]){
                var ans = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = ans;
            }
        }
    } 
    return arr;
}
console.log(arrSort([3, 7, 2, 8, 1, 9]))