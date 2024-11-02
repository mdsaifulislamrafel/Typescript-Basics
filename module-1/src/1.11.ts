{
    //  ternary operator || optional chaining || nullish coalescing operator

    const age: number = 20;
    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('child');
    }

    const isAdult = age >= 18 ? 'adult' : 'child';
    console.log({ isAdult });


    // nullish coalescing operator
    // use for null and undefined --->>>> of designation making default value
    const isAutonation = null;
    const result = isAutonation ?? 'No designation';
    console.log({ result });


    // optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: 'Rafel',
        address: {
            city: 'Dhaka',
            road: '123',
            presentAddress: 'no',
        }
    };



    const permanent = user?.address?.permanentAddress ?? 'No permanent address';
    console.log({ permanent });




    // 
}