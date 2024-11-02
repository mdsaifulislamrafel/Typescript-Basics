{
    // type same as interface use case of tow type declaration
    type User1 = {
        name: string;
        age: number;
    };

    type UserWithRole1 = User1 & { role: string; };

    const user1: UserWithRole1 = {
        name: 'Rafel',
        age: 23,
        role: 'admin',
    };

    // type of interface is different from type
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string;
    }


    const user2: UserWithRole2 = {
        name: 'Rafel',
        age: 23,
        role: 'admin',
    }


    // interface without use case of arrow declaration ----------->>>> array, object, function declaration with same type use for interface design

    type Roll = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const rollNumber1: Roll = [1, 2, 3];
    //    0, 2, 3 -------> number type array of index


    // function interface use case
    type Add1 = (num1: number, num2: number) => number;
    // interface function type use case
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add2 = (num1, num2) => num1 + num2;




    // 
}