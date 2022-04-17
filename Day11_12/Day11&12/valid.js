const rating = document.querySelector('.ratings_section');
const ratings = document.querySelector('.rating_section');
const thankYou = document.querySelector('.thankyou_section')
const ratingNum = rating.getElementsByTagName('span');
const submit = document.getElementById('button');
const num = document.getElementById('num');
for(let i = 0; i < ratingNum.length; i++){

    ratingNum[i].onclick = () =>  {
        num.innerText = ratingNum[i].innerHTML;
        for(i; i >= 0; --i){
            ratingNum[i].style.background = 'hsl(25, 97%, 53%)';
            ratingNum[i].style.color = '#fff';
            
        }
       submit.onclick = () => {
        ratings.style.display = 'none';
        thankYou.style.display = 'block';
    }
    }
    
}



