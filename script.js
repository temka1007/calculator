const display = document.querySelector(".display");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");
const minus = document.querySelector(".minus");

const buttons = document.querySelectorAll(".btn");

const allCancel = document.querySelector(".all-cancel");
const cancel = document.querySelector(".cancel");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");
const equal = document.querySelector(".equal");


let firstInput = [];
let secondInput = [];
let answer;
let counter = 1;
let changer = 0;
let chosenOperation;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (changer === 0) {
            firstInput.push(e.target.value);
        } else if (changer === 1) {
            secondInput.push(e.target.value)
        }
    })
});

function functionAdd(x, y) {
    answer = x + y;
    console.log(answer);
}

function operate(x, y) {
    if (chosenOperation == "+") {
        functionAdd(x, y);
    } else {
        console.log("oops")
    }
};

add.addEventListener("click", () => {
    counter++;
    changer = 1;
    chosenOperation = "+";
})

equal.addEventListener("click", () => {
    let a = Number(firstInput.join(""));
    let b = Number(secondInput.join(""));
    operate(a, b);
    firstInput = [];
    changer = 0;
})

