var expression = '';

function EnterClear() {
    expression = '';
    document.getElementById('Answer').value = '';
}


function EnterNumber(value) {
    expression += value;
    document.getElementById('Answer').value = expression;
}


function EnterEqual(){
    var result = eval(expression);
    document.getElementById('Answer').value = result;
}


function EnterOperator(value) {
    if (expression.length > 0) {
        var lastChar = expression[expression.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
            expression = expression.slice(0, -1);
        }
        expression += value;
        document.getElementById('Answer').value = expression;
    }
}

