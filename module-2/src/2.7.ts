{
    // 
    // generics constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    // 
    type Owner = "bike" | "car" | "ship"; // manual way
    // 
    type Owner1 = keyof Vehicle; // use keyof operator

    const person: Owner1 = "bike";


    const user = {
        name: 'Rony',
        age: 23,
        address: 'Dhaka'
    }

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const result1 = getPropertyValue(user, 'name');








    // 
}