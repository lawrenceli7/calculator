let firstNumber = '';
let operator = '';
let secondNumber = '';
let decimalAdded = false;

function appendNumber(num) {
    if (num === '.' && decimalAdded) {
        return;
    }
    if (num === '.' && !firstNumber) {
        firstNumber = '0';
    }
    if (operator === '') {
        firstNumber += num;
        updateDisplay(firstNumber);
    } else {
        secondNumber += num;
        updateDisplay(secondNumber);
    }
    if (num === '.') {
        decimalAdded = true;
    }
}

function appendDecimal(dot) {
    if (!decimalAdded) {
        appendNumber(dot);
    }
}

function setOperator(op) {
    operator = op;
    decimalAdded = false;
}

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    decimalAdded = false;
    updateDisplay('');
}

function backspace() {
    if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
        updateDisplay(secondNumber);
    } else if (operator !== '') {
        operator = '';
    } else if (firstNumber !== '') {
        firstNumber = firstNumber.slice(0, -1);
        updateDisplay(firstNumber);
    }
}

function calculate() {
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            if (parseFloat(secondNumber) === 0) {
                updateDisplay('Error');
                return;
            }
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
        default:
            return;
    }
    updateDisplay(result);
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        setOperator(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});

document.addEventListener('keyup', function (event) {
    const key = event.key;

    if (key === 'Enter' || key === '=') {
        event.preventDefault();
    }
});

