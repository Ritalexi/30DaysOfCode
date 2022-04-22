const range = document.getElementById('range');
const selector = document.getElementById('selector');
const progressBar = document.getElementById('progressBar');
const selectBtn = document.querySelector('.selectBtn');


range.oninput =  function(){
    selector.style.left = this.value + "%";
    progressBar.style.width = this.value + "%";
}


selector.addEventListener('mousedown', () => {
    selectBtn.style.backgroundColor = 'hsl(175, 73%, 15%)';
})

selector.addEventListener('mouseup', () => {
    selectBtn.style.backgroundColor = 'hsl(174, 86%, 45%)';
})