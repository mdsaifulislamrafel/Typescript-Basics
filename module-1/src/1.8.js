"use strict";
// destructuring
// object destructuring
{
    const user = {
        id: 345,
        name: {
            firstName: 'Rafel',
            middleName: 'Md Saiful',
            lastName: 'Islam'
        },
        contactNo: 1234567890,
        address: 'Dhaka'
    };
    const { contactNo, name: { firstName } } = user;
    // array destructuring
    const myFriends = ['Rafel', 'Saiful', 'Rahim', 'Karim', 'Jamal'];
    const [, myBestFriend, , ...rest] = myFriends; // destructuring
}
