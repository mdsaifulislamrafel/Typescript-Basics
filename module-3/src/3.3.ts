{
    // 
    // type guards

    // typeof -----> type guard
    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString();
        }
    }


    const result1 = add("100", "200");
    console.log(result1);


    // in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            return `Hello, ${user.name} (Admin)`
        } else {
            return `Hello, ${user.name}`
        }
    }


    const user1: NormalUser = {
        name: 'Rafel',
    };
    console.log(getUser(user1));


    const user2: AdminUser = {
        name: 'Rafel',
        role: 'admin',
    };

    console.log(getUser(user2));




    // 
}