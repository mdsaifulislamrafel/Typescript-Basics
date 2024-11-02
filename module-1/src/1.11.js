"use strict";
var _a, _b;
{
    //  ternary operator || optional chaining || nullish coalescing operator
    const age = 20;
    if (age >= 18) {
        console.log('adult');
    }
    else {
        console.log('child');
    }
    const isAdult = age >= 18 ? 'adult' : 'child';
    console.log({ isAdult });
    // nullish coalescing operator
    // use for null and undefined --->>>> of designation making default value
    const isAutonation = null;
    const result = isAutonation !== null && isAutonation !== void 0 ? isAutonation : 'No designation';
    console.log({ result });
    const user = {
        name: 'Rafel',
        address: {
            city: 'Dhaka',
            road: '123',
            presentAddress: 'no',
        }
    };
    const permanent = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent address';
    console.log({ permanent });
    // 
}
