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
let changer = 0;
let dotChanger = 0;
let operatorLimiter = 0;


function createNmr(nmr) {
    const number = document.createElement("div");
    number.textContent = `${nmr}`;
    number.classList.add("number");
    display.appendChild(number);
}

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
        while (display.firstChild){
            display.removeChild(display.lastChild);
        }
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
    while (display.firstChild){
        display.removeChild(display.lastChild);
    }
    if (answer > 999999999999999) {
        const number = document.createElement("div");
        number.textContent = "ERROR";
        number.classList.add("number");
        display.appendChild(number);
    } else {
        createNmr(answer);
    }
    changer = 1;
    convertToMinus = 0;
    console.log(answer);
    answer = 0;
    userInput = [];
})

allCancel.addEventListener("click", () => {
    userInput = [];
    secondInput = [];
    answer = 0;
    chosenOperation;
    convertToMinus = 0;
    a;
    while (display.firstChild){
        display.removeChild(display.lastChild);
    }
    console.clear();
});

cancel.addEventListener("click", () => {
    userInput.pop();
    display.removeChild(display.lastChild);
    console.log("popped!")
})

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (changer == 1) {
            while (display.firstChild){
                display.removeChild(display.lastChild);
            }
            changer = 0;
        }
        userInput.push(e.target.value);
        createNmr(e.target.value); 
        limitToNumber();
        console.log(e.target.value);
    })
});

dot.addEventListener("click", (e) => {
    userInput.push(e.target.value);
    createNmr(e.target.value); 
    console.log(e.target.value);
});

minus.addEventListener("click", () => {
    convertToMinus = 1;
})

function limitToNumber() {
    while (document.getElementsByClassName('number').length > 15) {
        display.removeChild(display.lastChild);
    }
}