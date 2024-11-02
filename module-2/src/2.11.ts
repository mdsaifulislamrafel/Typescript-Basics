{
    // 
    // utility types
    // pick type

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Number = Pick<Person, 'name' | "age" | "contactNo" | "email">

    // Omit type

    type ContactInfo = Omit<Person, "email" | "age">


    // Required type

    type RequiredInfo = Required<Person>;


    // Partial type

    type PersonPartial = Partial<Person>;

    // readonly type

    type ReadonlyInfo = Readonly<Person>;

    const person1: ReadonlyInfo = {
        name: 'Rafel',
        age: 23,
        email: 'rafel@gmail.com',
        contactNo: '01844435956',
    }

    person1.name = 'Rafel Ahmed';


    // Record type

    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const EmptyObj: Record<string, unknown> = {};
    EmptyObj.age = ""

    const obj1: MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
    };


    // 
}