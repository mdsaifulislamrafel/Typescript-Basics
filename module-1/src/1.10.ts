{
    // // union type
    // type FrontendDeveloper = 'fakibaziDeveloper' | 'juniorDeveloper' 
    // type FullstackDeveloper = 'fakibaziDeveloper' | 'ExpertDeveloper' 

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper : FrontendDeveloper = 'fakibaziDeveloper'


    // type User = {
    //     name: string,
    //     age: number,
    //     salary: number,
    //     address: string,
    //     gender: 'Male' | 'Female',
    // }

    // const user : User = {
    //     name: 'Rafel',
    //     age: 23,
    //     salary: 15000,
    //     address: 'Dhaka',
    //     gender: 'Male'
    // }

    type FrontendDeveloper = {
        skills: string[];
        designation: 'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper


    const fullstackDeveloper : FullstackDeveloper = {
        skills: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'MongoDB'],
        designation: 'Frontend Developer',
        designation2: 'Backend Developer'
    }


}