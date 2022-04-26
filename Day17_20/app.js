const quote = document.getElementById("advice");
const reloadButton = document.querySelector('#button');
const id = document.querySelector('#id');


const apiUrl ='https://api.adviceslip.com/advice'
 



function getQuotes(){
    fetch(apiUrl)
    .then( (resp) => resp.json())
   .then( (data) => {
       console.log(data)
       quote.innerHTML = '"' + data.slip.advice + '."'
       id.innerHTML = data.slip.id
   })

}

reloadButton.addEventListener('click', () => {
    getQuotes()
})

window.onload = getQuotes;