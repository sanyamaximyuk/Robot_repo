class SameClass {
    #privateName;
    constructor(name){
        this.#privateName = name;
        this.fullName = this.#privateName + ' Doe';
    }
    get name() {
        return this.#privateName;
    }

    set name(name) {
        if (!name) {
            throw new Error('Name is required');
        } else{
            this.#privateName = name;
        }
    }

    get fullNameGetter() {
        return this.#privateName + ' Doe';
    }
}

const sameClass = new SameClass('John');
console.log(sameClass.name);
console.log(sameClass.fullName);


sameClass.name = 'Curt';
console.log(sameClass.name);
console.log(sameClass.fullNameGetter);


const car = {
    brand: "BMW",
    model: "X1",
    specs: {
        weight: 1440,
        horsepower: 240
    },

    get fullName() {
        return this.brand + this.model;
    },

    set changeModel(newModel) {
        this.model = newModel;
    },

    kgsPerHorses() {
        return this.specs.weight / this.specs.horsepower;
    }
};

console.log('Car:', car.fullName);

car.changeModel = 'X5';
console.log('New car:', car.fullName);

console.log('Power', car.kgsPerHorses());
