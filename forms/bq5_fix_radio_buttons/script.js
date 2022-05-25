document.querySelector('#process').addEventListener('click', function(){
    let numbers = document.querySelectorAll('.number');
    for (let n of numbers){
        if (n.checked){
            console.log(parseInt(n.value));
        }
    }
})