document.querySelector('#process').addEventListener('click', function () {
    let operation = document.querySelectorAll('.operation');
    let numbers = document.querySelectorAll('.numbers');
    let count = 0;
    let mult = 1;
    for (let o of operation) {
        if (o.checked) {  
            if (o.value == 'plus') {
            for (let n of numbers) {
                if (n.checked) {
                    count += parseInt(n.value);
                }
            }
            console.log(count);
        }
        if (o.value == 'multiply') {
            for (let n of numbers) {
                if (n.checked) {
                    mult *= parseInt(n.value);
                }
            }
            console.log(mult);
        }
    
    }
}
})