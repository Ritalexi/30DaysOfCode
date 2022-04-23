let result = [];
function fizzbuzz ( num )
{
   
for (let i = 1; i <= num; i++)
{
    if(i % 3 === 0 && i % 5 === 0) {
        result.push( 'FIZZBUZZ' );
    }
 Day15_16
    else if(i % 3 === 0) {

   else if(i % 3 === 0) {
 master

        result.push( 'FIZZ' );
    }
    else if( i % 5 === 0 ) {
        result.push( 'BUZZ' );
    } else
    {
        result.push( i );
    }
}
}
fizzbuzz ( 20 );

console.log( result );
