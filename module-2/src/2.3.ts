{
    // 
    // generic type

    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [1, 2, 3, 4, 5];
    const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

    // const mentors: string[] = ['Rafel', 'Rahim', 'Karim'];
    const mentors: GenericArray<string> = ['Rafel', 'Rahim', 'Karim'];

    const boolArray: GenericArray<boolean> = [true, false, true];

    interface User {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: 'Rafel',
            age: 23,
        },
        {
            name: 'Rahim',
            age: 25,
        },
        {
            name: 'Karim',
            age: 24,
        },
    ]


    // generic tuple

    type GenericTuple<X, Y, > = [X, Y, ];

    const mean: GenericTuple<string, string> = ['Mr Rafel', 'Ms nai']
    console.log(mean);


    const userWithIs: GenericTuple<number, { name: string, age: number }> = [1111, { name: 'Rafel', age: 23 }];
    console.log(userWithIs);






    // 
}