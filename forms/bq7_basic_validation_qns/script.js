document.querySelector('#submit').addEventListener('click', function(){
    let scoops = document.querySelector('#number-of-scoop').value;
    let toppings = document.querySelectorAll('.toppings');
    let count = 0;
    for (let t of toppings) {
        if (t.checked) {
            count++;
        }
    }

    let validate = [];
    if (scoops < 1 || scoops > 5) {
        validate.push('invalid-scoop-number');
    } if (isNaN(scoops)) {
        validate.push('scoop-not-a-number')
    } if (count > 3) {
        validate.push('too-much-toppings')
    }
    console.log(validate);
})