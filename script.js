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


let userInput = [];
let secondInput = [];
let answer = 0;
let counter = 0;
let changer = 0;
let chosenOperation;

let a;
let b = 0;


buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        userInput.push(e.target.value);
        console.log(e.target.value)
    })
});

function functionAdd(x, y) {
    answer = x + y;
}

function operate(x, y) {
    if (chosenOperation == "+") {
        functionAdd(x, y);
    } else {
        console.log("oops")
    }
};

add.addEventListener("click", () => {
    a = Number(userInput.join(""));
    chosenOperation = "+";
    operate(a, answer);
    userInput = [];
    console.log(chosenOperation)

})

equal.addEventListener("click", () => {
    a = Number(userInput.join(""));
    operate(a, answer);
    userInput = [];
    console.log(answer);
})

