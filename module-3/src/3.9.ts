{
    // 
    // abstraction 2 ভাবে করা যায় যথা ঃ 1. interface 2. abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        moveBy(): void;
    }


    // real implementation
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log('I am starting the car ...');
        }
        stopEngine(): void {
            console.log('I am stopping the car ...');
        }
        moveBy(): void {
            console.log('I am moving by car ...');
        }
        test(): void {
            console.log('Car test method');
        }
    }



    // const toyotaCar = new Car1()
    // toyotaCar.startEngine();
    // toyotaCar.stopEngine();


    // abstract class
    // ida
    abstract class Car2 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract moveBy(): void
        abstract test(): void
    }

    // 
    class Toyotacar extends Car2 {
        startEngine(): void {
            console.log(' Starting engine ... ');
        }
        stopEngine(): void {
            console.log('Stopping engine ... ');
        }
        moveBy(): void {
            console.log('Moving by car ... ');
        }
        test(): void {
            console.log('Car test method ... ');
        }
    }

    const hondaCar = new Toyotacar();
    hondaCar.startEngine();
    hondaCar.stopEngine();
    hondaCar.moveBy();
    hondaCar.test();


    // 






    // 
}