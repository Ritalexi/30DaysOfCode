
function showMyDetails(){
    const arr = [{
        name: 'Rita',
        age: 20,
        level: '300Level'
            },{
        name: 'Okoli',
        age: 24,
        level: '500Level'
            }];
    const myArr = [];
    arr.forEach(
        details => {
const myDetails = details.name + '/' + details.age + '/' + details.level;
myArr.push(myDetails);
        });
    return.log(myArr);
    
}
console.log(showMyDetails());
