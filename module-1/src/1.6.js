"use strict";
// function
// normal function
// arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: 'Rafel',
    balance: 25,
    addBalance(balance) {
        return `My New Balance is ${this.balance + balance}`;
    }
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = array.map((element) => element * element);
