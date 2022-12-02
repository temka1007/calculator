const display = document.querySelector(".display");

const dot = document.querySelector(".dot");
const minus = document.querySelector(".minus");

const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");

const allCancel = document.querySelector(".all-cancel");
const cancel = document.querySelector(".cancel");

const equal = document.querySelector(".equal");


let userInput = [];
let secondInput = [];
let answer = 0;
let chosenOperation;
let convertToMinus = 0;
let a;


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        userInput.push(e.target.value);
        console.log(e.target.value);
    })
});

dot.addEventListener("click", (e) => {
    userInput.push(e.target.value);
    console.log(e.target.value);
});

minus.addEventListener("click", () => {
    convertToMinus = 1;
})

function functionAdd(oldAnswer, input) {
    answer = oldAnswer+input
};
function functionSubtract(oldAnswer, input) {
    if (answer == 0) {
        answer = input;
    } else if (input == 0) {
        answer = oldAnswer;
    } else {
        answer = oldAnswer - input;
    };
};
function functionMultiply(oldAnswer, input) {
    if (answer == 0) {
        answer = input;
    } else if (input == 0) {
        answer = oldAnswer;
    } else {
        answer = oldAnswer * input;
    };
};
function functionDivide(oldAnswer, input) {
    if (answer == 0) {
        answer = input;
    } else if (input == 0) {
        answer = oldAnswer;
    } else {
        answer = oldAnswer / input;
    };
};
function functionPercent(oldAnswer, input) {
    if (answer == 0) {
        answer = input;
    } else if (input == 0) {
        answer = oldAnswer;
    } else {
        answer = oldAnswer % input;
    };
};

function operate(oldAnswer, input) {
    if (chosenOperation == "+") {
        functionAdd(oldAnswer, input);
    } else if (chosenOperation == "-") {
        functionSubtract(oldAnswer, input)
    } else if (chosenOperation == "*") {
        functionMultiply(oldAnswer, input)
    } else if (chosenOperation == "/") {
        functionDivide(oldAnswer, input)
    } else if (chosenOperation == "%") {
        functionPercent(oldAnswer, input)
    };
};

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if(convertToMinus == 0) {
            a = Number(userInput.join(""));
        } else if (convertToMinus == 1) {
            a = Number(userInput.join(""));
            a = a * (-1);
        }
        chosenOperation = e.target.value;
        operate(answer, a);
        userInput = [];
        convertToMinus = 0;
        console.log(chosenOperation)
    })
})

equal.addEventListener("click", () => {
    if(convertToMinus == 0) {
        a = Number(userInput.join(""));
    } else if (convertToMinus == 1) {
        a = Number(userInput.join(""));
        a = a * (-1);
    }
    operate(answer, a);
    userInput = [];
    convertToMinus = 0;
    console.log(answer);
})



