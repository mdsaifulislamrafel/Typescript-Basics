{
    // 
    // instance guard
    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`${this.name} makes a sound`);
        }
    }


    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeBark() {
            console.log(`${this.name} barks`);
        }
    }



    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }
        makeMeaw() {
            console.log(`${this.name} meawing`);
        }
    }


    // smart way ta handle korar jonow chaila amra function hebohar kprta pari

    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            console.log('This is not an animal');
        }
    };

    const dog = new Dog('dog', 'ghawing');
    const cat = new Cat('cat', 'meawing');
    
    console.log(dog);
    console.log(cat);


    // 

}










