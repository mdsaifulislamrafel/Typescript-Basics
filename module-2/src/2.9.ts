{
    // 
    // conditional type

    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type Rafel = {
        bike: string;
        car: string;
        ship: string;
    }

    // keyof operator
    // car asa ki na / bike asa ki na / ship asa ki na
    type checkVehicle<T> = T extends keyof Rafel ? true : false;


    type HasBike = checkVehicle<'gg'>;


    // 

}