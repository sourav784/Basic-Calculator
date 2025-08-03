let currentExpression = '';
let currentResult = '';
let memory = 0;

function appendNumber(num) {
    currentExpression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (op === 'x²') {
        currentExpression += '**2';
    } else {
        currentExpression += op;
    }
    updateDisplay();
}

function clearAll() {
    currentExpression = '';
    currentResult = '0';
    updateDisplay();
}

function clearEntry() {
    currentExpression = '';
    updateDisplay();
}

function toggleSign() {
    if (currentExpression) {
        if (currentExpression.startsWith('-')) {
            currentExpression = currentExpression.slice(1);
        } else {
            currentExpression = '-' + currentExpression;
        }
    }
    updateDisplay();
}

function squareRoot() {
    try {
        currentExpression = Math.sqrt(eval(currentExpression)).toString();
        updateDisplay();
    } catch {
        currentResult = 'Error';
    }
}

function inverse() {
    try {
        currentExpression = (1 / eval(currentExpression)).toString();
        updateDisplay();
    } catch {
        currentResult = 'Error';
    }
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        currentResult = eval(currentExpression).toString();
        memory = currentResult;
        updateDisplay();
    } catch {
        currentResult = 'Error';
    }
}

function memoryClear() {
    memory = 0;
    updateDisplay();
}

function memoryRecall() {
    currentExpression += memory;
    updateDisplay();
}

function memoryAdd() {
    memory += eval(currentExpression) || 0;
    updateDisplay();
}

function memorySubtract() {
    memory -= eval(currentExpression) || 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('expression').innerText = currentExpression;
    document.getElementById('result').innerText = currentResult || '0';
    document.getElementById('memory').innerText = memory !== 0 ? `M ${memory}` : '';
}
