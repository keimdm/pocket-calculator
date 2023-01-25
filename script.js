var newNumber = true;
var number = 0;
var storedNumber = 0;
var operator = "";
document.getElementById("value").innerHTML = number;

function addNumber(x) {
    if (newNumber === true) {
        number = x;
        newNumber = false;
    }
    else {
        if (number.toString().length < 9) {
            number = (number * 10) + x;
        }
    }
    document.getElementById("value").innerHTML = number;
}

function addOperator(x) {
    operator = x;
    storedNumber = number;
    newNumber = true;
}

function erase() {
    newNumber = true;
    number = 0;
    storedNumber = 0;
    operator = "";
    document.getElementById("value").innerHTML = number;
}

function calculate() {
    if (operator === "+") {
        number = storedNumber + number;
    }
    else if (operator === "-") {
        number = storedNumber - number;
    }
    else if (operator === "*") {
        number = storedNumber * number;
    }
    else if (operator === "/") {
        number = storedNumber / number;
    }
    newNumber = true;
    operator = "";
    storedNumber = 0;
    if (number > 999999999) {
        document.getElementById("value").innerHTML = ">999999999";
    }
    else {
        if (number.toString().length > 9) {
            testString = number.toString().slice(0, 10);
            if (testString.slice(-1).valueOf() === '.'.valueOf()) {
                testString = testString.slice(0, 9);
            }
            document.getElementById("value").innerHTML = testString;
        }
        else {
            document.getElementById("value").innerHTML = number;
        }
    }
}