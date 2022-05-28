document.querySelector('#process').addEventListener('click', function(){
    let numbers = document.querySelectorAll('.numbers');  
    let numbersArray = [];
    for (let n of numbers) {
        if (n.checked) {
            numbersArray.push(parseInt(n.value));
            console.log(Math.max(...numbersArray));
        } else if (!n.checked) {
            console.log(0);
        }
    }


    
})