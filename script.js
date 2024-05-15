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
