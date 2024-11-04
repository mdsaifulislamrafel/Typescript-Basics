{
    // 
    // oop - class
    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // parameters  properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`${this.name} makes a ${this.sound} sound.`);
        }
    }

    const dog = new Animal("Animal", "dog", "ghew ghew");
    const cat = new Animal("Animal", "cat", "meaw meaw");
    dog.makeSound();
    cat.makeSound();







    // 
}