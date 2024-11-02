{
    // 

    // function with generics type

    const createArray = (param: string): string[] => {
        return [param];
    };
    const result1 = createArray('Bangladesh');

    // generics type
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };
    interface User {
        id: number;
        name: string;
        age: number;
    }
    const resultGeneric = createArrayWithGeneric<User>({ id: 1, name: 'Rony', age: 20 });
    // console.log({ resultGeneric });


    // Tuple with generics type
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2];
    };

    const resultTuple = createArrayWithTuple<number, string>(100, 'Bangladesh');

    const resultTuple1 = createArrayWithTuple<number, User>(100, { id: 1, name: 'Rony', age: 20 });
    console.log({ resultTuple });
    console.log({ resultTuple1 });




    // 

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next level web development';
        return {
            ...student,
            course,
        }
    }


    const student1 = addCourseToStudent({ name: 'Rony', email: 'rony@gmail.com', davType: 'Next level developer' });;
    const student2 = addCourseToStudent({ name: 'Rony', email: 'rafel@gmail.com', davType: 'Next level developer', handWatch: 'Apple' });





    // 
}