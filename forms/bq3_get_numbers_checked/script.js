document.querySelector('#process').addEventListener('click', function(){
    let numbers = document.querySelectorAll('.numbers');
    let count = 0;
    for (let n of numbers){
        if (n.checked){
            count++
        }
    }
    console.log(count);
})