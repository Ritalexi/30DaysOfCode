function details(arr, num){
    var ans = [];
    var ans1 = [];
let newArr = arr.sort((a, b) => a - b);

for(let i = 0; i < newArr.length; i++){
  for(let j = i + 1; j < newArr.length; j++){
      if(newArr[i] + newArr[j] === num){
         var x = newArr.indexOf(newArr[i]);
         var y = newArr.indexOf(newArr[j]);
  ans.push([x, y]);
  return ans;
      }
    }
  }
  if(ans != [])
  {
      ans1.push([-1, -1]);
  }
  return ans1;
}


console.log(details([4,96,3,5,0,14,10], 100));