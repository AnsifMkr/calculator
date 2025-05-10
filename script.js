document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById('display');

    if (!isNaN(key) || key === '.') {
        // If number or decimal
        appendValue(key);
    } else if (['+', '-', '*', '/', '^', '(', ')'].includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        // If Enter key
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
    
});

function appendValue(val){
    document.getElementById('display').value += val;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function backspace(){
    let display = document.getElementById('display');
    display.value = display.value.slice(0,-1);
}

function calculate(){
    let expression = document.getElementById('display').value;
    
    try{
        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/e/g, Math.E);
        expression = expression.replace(/\^/g, '**');

        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/ln\(/g, 'Math.log(');

        let result = eval(expression);
        document.getElementById('display').value = result;
    }
    catch (error){
        document.getElementById('display').value = 'Error';
    }
}

function squareRoot(){
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            display.value = 'Error';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
       display.value = 'Error';
    }
}
