{
    // 
    // type assertion
    let anyThing: any;

    anyThing = "Next level Development";

    anyThing = 222;
    // (anyThing as number)

    const kgToGram = (value: string | number): number | string | undefined => {
        if (typeof value === 'string') {
            const convertValue = +value * 1000;
            return `${convertValue} gram`
        } else if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGram(1000) as number;
    const result2 = kgToGram('1000') as string;

    type CustomErrorType = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as CustomErrorType).message);
    }



    // 
}