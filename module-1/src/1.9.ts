{
    //  type alias

    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }

    const student1: Student = {
        name: 'Rafel',
        age: 23,
        gender: 'Male',
        contactNo: '01844435956',
        address: 'Dhaka',
    }

    const student2: Student = {
        name: 'Saiful',
        age: 23,
        gender: 'Male',
        address: 'Dhaka',
    }


    type Add = (num1: number, num2: number) => number;
    const add : Add = (num1, num2) => num1 + num2;



    // 
}