"use strict";
{
    // 
    // type assertion
    let anyThing;
    anyThing = "Next level Development";
    anyThing = 222;
    // (anyThing as number)
    const kgToGram = (value) => {
        if (typeof value === 'string') {
            const convertValue = +value * 1000;
            return `${convertValue} gram`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    // 
}
