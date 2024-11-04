{
    // 
    // oop inheritance

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours: number) {
            return `Student ${this.name} sleeps for ${numberOfHours} hours`;
        }
    }


    class Student extends Parent {
        // name: string;
        // age: number;
        // address: string;

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
            // this.name = name;
            // this.age = age;
            // this.address = address;
        }
        // getSleep(numberOfHours: number) {
        //     return `Student ${this.name} sleeps for ${numberOfHours} hours`;
        // }
    }

    const student1 = new Student('Rafel', 10, "Thakurgaon");
    console.log(student1);

    // 

    // 
    class Teacher extends Parent {
        description: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.description = designation;
        }
        getSleep(numberOfHours: number) {
            return `Student ${this.name} sleeps for ${numberOfHours} hours`;
        }

        teakClass(numberOfClass: number) {
            return `Teacher ${this.name} teaches ${numberOfClass} classes`;
        }
    }

    const teacher = new Teacher('Rafel', 10, "Thakurgaon", "Teacher");
    
    console.log(teacher);





    // 
}