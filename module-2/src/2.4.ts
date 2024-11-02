{
    // 
    // interface - generic

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
    }

    type Watch = {
        brand: string;
        model: string;
        heartBit?: boolean;
        sleepTrack?: boolean;
        releaseYear?: number;
    }

    const poorDeveloper: Developer<Watch> = {
        name: 'Rafel',
        computer: {
            brand: 'Apple',
            model: 'Macbook Pro',
            releaseYear: 2020
        },
        smartWatch: { brand: 'Apple', model: 'Apple Watch', releaseYear: 2021 }

    }

    // 
    const richDeveloper: Developer<Watch> = {
        name: 'Rich Rafel',
        computer: {
            brand: 'Apple',
            model: 'Macbook Pro',
            releaseYear: 2024
        },
        smartWatch: { brand: 'Apple', model: 'Apple Watch', heartBit: true, sleepTrack: true }

    }






    // 
}