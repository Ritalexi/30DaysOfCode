let result = [];
function fizzbuzz(num)
{
    
for (let i = 1; i <= num; i++)
{
    if(i % 3 === 0 && i % 5 === 0)

    {
       
        result.push("FIZZBUZZ");
    }
    if(i % 3 === 0)
    {

        result.push("FIZZ");
    }
    if(i % 5 === 0)

    {

        result.push( "BUZZ");
    }
    
    else
    {
        result.push(i);
    }
}
}

fizzbuzz(20);

console.log(result);