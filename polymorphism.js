class Animal {
    constructor(name) {
        this.name = name
    }

    eats() {
        console.log(this.name + " " + "eats food")
    }
}

// let animal = new Animal('dog')
// animal.eats();

class Human extends Animal {
    eats() {
        super.eats();
        console.log(this.name + " " + "make's food")
    }
}

let human = new Human('Aditya');
human.eats();