function sum(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
{
sum += arr[i];
}
return sum;
}

let addition = sum([2,4,3]);
console.log(addition);