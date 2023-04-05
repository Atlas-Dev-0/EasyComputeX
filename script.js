function addToDisplay(num) {
    var display = document.getElementsByName("display")[0];
    if (display.value === "0") {
        display.value = num;
    } else {
        display.value += num;
    }
}

function clearDisplay() {
    var display = document.getElementsByName("display")[0];
    display.value = "";
}

function deleteFromDisplay() {
    var display = document.getElementsByName("display")[0];
    display.value = display.value.slice(0, -1);
}

function addDecimal() {
    var display = document.getElementsByName("display")[0];
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function calculate() {
    const display = document.getElementsByName("display")[0];
    const expression = display.value;
    const operators = ["+", "-", "*", "/"];
    let operator = null;

    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i])) {
            operator = operators[i];
            break;
        }
    }

    const operands = expression.split(operator);

    const num1 = parseFloat(operands[0]);
    const num2 = parseFloat(operands[1]);

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return;
    }

    display.value = result;
}


document.addEventListener("DOMContentLoaded", function () {
    const numberButtons = document.querySelectorAll(".numberbutton");
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            addToDisplay(button.value);
        });
    });

    const acButton = document.querySelector("input[value='Ac']");
    if (acButton) {
        acButton.addEventListener("click", function () {
            clearDisplay();
        });
    } else {
        console.error("Element not found");
    }

    const delButton = document.querySelector("input[value='Del']");
    if (delButton) {
        delButton.addEventListener("click", function () {
            deleteFromDisplay();
        });
    } else {
        console.error("Element not found");
    }

    const arithmeticButtons = document.querySelectorAll(".arithmethic");
    arithmeticButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            addToDisplay(button.value);
        });
    });

    const equalsButton = document.querySelector(".equals");
    if (equalsButton) {
        equalsButton.addEventListener("click", function () {
            calculate();
        });
    } else {
        console.error("Element not found");
    }

    const decimalButton = document.querySelector("input[value='.']");
    if (decimalButton) {
        decimalButton.addEventListener("click", function () {
            addDecimal();
        });
    } else {
        console.error("Element not found");
    }

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            calculate();
        });
    } else {
        console.error("Form not found");
    }
});
