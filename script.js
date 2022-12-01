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
let changer = 0;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (changer === 0) {
            firstInput.push(e.target.value)
        } else if (changer === 1) {
            secondInput.push(e.target.value)
        }
    })
});



equal.addEventListener("click", () => changer = 1);

