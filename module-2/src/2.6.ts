{
    // 
    // constraints

    interface MustType {
        id: number;
        name: string;
        email: string;
    }

    const addCourseToStudent = <T extends MustType>(student: T) => {
        const course = 'Next level web development';
        return {
            ...student,
            course,
        }
    }

    interface StudentType {

        id: number;
        name: string;
        email: string;
        davType?: string;
        handWatch?: string;

    }

    const student1 = addCourseToStudent<StudentType>({
        id: 222,
        name: 'Rony',
        email: 'rony@gmail.com',
        davType: 'Next level developer'
    });;
    const student2 = addCourseToStudent<StudentType>({
        id: 111,
        name: 'Rony',
        email: 'rafel@gmail.com',
        davType: 'Next level developer',
        handWatch: 'Apple'
    });


    // 
}