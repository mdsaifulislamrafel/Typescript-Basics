{
    // 
    // mapped types

    const arrayOfNumberer: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const arrayOfStrings: string[] = arrayOfNumberer.map((number) => number.toString());

    console.log(arrayOfStrings);

    type AreaNumber = {
        height: number,
        width: number
    };

    type Height = AreaNumber['height']; // look up type

    // type AreaString = {
    //     height: string,
    //     width: string
    // };

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }
    const area1: AreaString<{ height: string, width: number }> = {
        height: '100',
        width: 100,
    }
    console.log({ area1 });

    // 
}