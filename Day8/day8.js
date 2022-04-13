function palidrone(arr){
let ans = [];
for(let i = 0; i < arr.length; i++){
   const newArr = arr[i].split('').reverse().join('');
   if(arr[i] === newArr){
ans.push('true');
   }
else{
ans.push('false')
}
}
return ans
}
console.log(palidrone(['ada','bad','racecar', 'kala', 'madam']));