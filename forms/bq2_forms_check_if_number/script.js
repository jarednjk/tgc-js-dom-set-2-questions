// write your code here
function isNumber(x) {
    if (typeof x == number) {
        return true;
    } else {
        return false;
    }
}

document.querySelector('#process').addEventListener('click', function(){
    let num1 = parseInt(document.querySelector('#num1').value);
    let num2 = parseInt(document.querySelector('#num2').value);
    let num3 = parseInt(document.querySelector('#num3').value);

    if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
        console.log((num1 + num2 + num3)/3);
    } else {
        console.log('error');
    }
})

// --- LEAVE THE BELOW ALONE ----
function isNumber(x) {
    return !isNaN(x);
}

try {
   module.exports = exports = {isNumber};
} catch (e) {}