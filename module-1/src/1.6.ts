// function
// normal function
// arrow function

function add(num1: number, num2: number): number {
    return num1 + num2;
}
add(2, 3);


const addArrow = (num1: number, num2: number): number => num1 + num2;

const poorUser = {
    name: 'Rafel',
    balance: 25,
    addBalance(balance: number): string {
        return `My New Balance is ${this.balance + balance}`
    }
}

const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArray: number[] = array.map((element: number): number => element * element);