const details = ['Seun/23/100 level', 'rita/22/200 level'];
let ans = details.map((s)=>{
let arr = s.split('/');
return{
name: arr[0],
age:arr[1],
level: arr[2]
}
})
console.log(ans)