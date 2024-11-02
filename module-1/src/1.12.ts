{
    // nullable types

    const searchName = (value: string | null) => {
        if (value) {
            console.log("Searching...");
        } else {
            console.log("Nothing to search");
        }
    }

    searchName(null)


    // unknown types

    const getSpeedInMeterPerSecond = (speed: unknown) => {
        if (typeof speed === 'number') {
            const convertedSpeed = (speed * 1000) / 3600;
            console.log(`Speed is ${convertedSpeed}`);
        }
        else if (typeof speed === 'string') {
            const [result, unit] = speed.split(' ');
            console.log(result);
            const convertedSpeed = (+result * 1000) / 3600;
            console.log(`Speed is ${convertedSpeed}`);
        } else {
            console.log('Wrong type');
        }
    }

    getSpeedInMeterPerSecond(`100 kmh^-1`);



    // never types
    const throwError = (message: string): never => {
        throw new Error(message);
    }

    throwError('Rafel Error!');


    // 
}