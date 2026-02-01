document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('display');
    let currentInput = '0';
    let previousInput = '';
    let operator = '';

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function handleNumber(num) {
        if (currentInput === '0') {
            currentInput = num;
        } else {
            currentInput += num;
        }
        updateDisplay();
    }

    function handleOperator(op) {
        if (previousInput !== '' && currentInput !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case 'x':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function clear() {
        currentInput = '0';
        previousInput = '';
        operator = '';
        updateDisplay();
    }

    function handleDecimal() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    }

    function handleUnary() {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
    }

    function handlePercent() {
        currentInput = (parseFloat(currentInput) / 100).toString();
        updateDisplay();
    }

    function handleDelete() {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }

    // Event listeners
    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('percent').addEventListener('click', handlePercent);
    document.getElementById('divide').addEventListener('click', () => handleOperator('/'));
    document.getElementById('multiply').addEventListener('click', () => handleOperator('x'));
    document.getElementById('subtract').addEventListener('click', () => handleOperator('-'));
    document.getElementById('add').addEventListener('click', () => handleOperator('+'));
    document.getElementById('equal').addEventListener('click', calculate);
    document.getElementById('decimal').addEventListener('click', handleDecimal);
    document.getElementById('unary').addEventListener('click', handleUnary);

    document.getElementById('num1').addEventListener('click', () => handleNumber('1'));
    document.getElementById('num2').addEventListener('click', () => handleNumber('2'));
    document.getElementById('num3').addEventListener('click', () => handleNumber('3'));
    document.getElementById('num4').addEventListener('click', () => handleNumber('4'));
    document.getElementById('num5').addEventListener('click', () => handleNumber('5'));
    document.getElementById('num6').addEventListener('click', () => handleNumber('6'));
    document.getElementById('num7').addEventListener('click', () => handleNumber('7'));
    document.getElementById('num8').addEventListener('click', () => handleNumber('8'));
    document.getElementById('num9').addEventListener('click', () => handleNumber('9'));

    document.getElementById('zero').addEventListener('click', () => handleNumber('0'));
});
