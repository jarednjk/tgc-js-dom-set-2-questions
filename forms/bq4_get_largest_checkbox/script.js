document.querySelector('#process').addEventListener('click', function(){
    let numbers = document.querySelectorAll('.numbers');
    // let num1 = parseInt(document.querySelector('#num1'));
    // let num2 = parseInt(document.querySelector('#num2'));
    // let num3 = parseInt(document.querySelector('#num3'));
    // let num4 = parseInt(document.querySelector('#num4'));
    // let num5 = parseInt(document.querySelector('#num5'));
    // let num6 = document.querySelector('#num6').value;

    // let numbersArray = [];
    // for (let i=0; i<numbers.length; i++) {
    //     numbersArray.push(numbers.value);
    //     if (numbers[i].checked) {
    //         console.log(Math.max(parseInt(...numbersArray)))
    //     }
    // }
    
    

    
    // for (let n of numbers) {
    //     if (n.checked){
    //         console.log(parseInt(n.value));
    //     } else {
    //         console.log('0');
    //     }
    // }

  
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