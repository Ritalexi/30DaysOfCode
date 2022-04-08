let value = [];
function fizzbuzz (num){
 num.forEach(element => {
           let answer = [];
        for (let j = 1; j <= element; j++) {
         if(j % 3 === 0 && j % 5 === 0) {
                let x = 'FIZZBUZZ';
            answer.push(x);
            }
            else if(j % 3 === 0) {
        
               let y =  'FIZZ';
             answer.push(y);
            }
            else if( j % 5 === 0 ) {
          let z = 'BUZZ';
         answer.push(z);
            } else
            {
            let w =  j ;
           answer.push(w);
            }
        }
value.push(answer);
       });
   }
   fizzbuzz ([10,12,13]);
console.log(value);
