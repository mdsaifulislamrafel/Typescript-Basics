{
    //  polymorphism


    class Person {
        getSleep() {
            console.log('i am sleeping in 8 hours per day');
        }
    }


    class Student extends Person {
        getSleep() {
            console.log('i am sleeping in 7 hours per day');
        }
    }


    class Developer extends Person {
        getSleep() {
            console.log('i am sleeping in 6 hours per day');
        }
    };

    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();


    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);






// 


    class Shape {
        getArea(): number {
            return 0;
        }
    };


    // pi is here 
    class Circle extends Shape {
        radius: number;

        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    };
    // 

    // rectangular hight and width
    class Rectangle extends Shape {
        hight: number;
        width: number;

        constructor(higth: number, width: number) {
            super();
            this.hight = higth;
            this.width = width;
        }
        getArea(): number {
            return this.hight * this.width;;
        }
    };



    const getShapeArea = (param: Shape) => {
        console.log(`Area of shape is ${param.getArea()}`);
    }

    const shape1 = new Shape();
    const shape2 = new Circle(5);
    const shape3 = new Rectangle(5, 10);

    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);






    // 
}