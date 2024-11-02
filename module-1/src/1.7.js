"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    const bros1 = ['kamal', 'jamal', 'salam'];
    const bros2 = ['rohim', 'korim', 'mohim'];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: 'Rafel',
        redux: 'Saiful',
        dbms: 'Rahim',
    };
    const mentors2 = {
        prisma: 'Kamal',
        nextjs: 'Salam',
        cloud: 'Rohim',
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    //  learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hi ${friend}`);
        });
    };
    greetFriends('Rafel', 'Saiful', 'Rahim');
}
