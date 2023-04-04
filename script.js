function addToDisplay(num) {
    var display = document.getElementsByName("display")[0];
    display.value += num;
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
});
