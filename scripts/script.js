function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function () {
        if (this.ounces === 8) {
            return "small";
        } else if (this.ounces === 12) {
            return "medium";
        } else if (this.ounces === 16) {
            return "large";
        }
    };
    this.toString = function () {
        return ("You've ordered a " + this.getSize() + " " + this.roast + " coffee.");
    };
}

let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());

let capusino = new Coffee("Capusino", 8);
console.log(capusino.toString());

function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;

    this.start = function () {
        this.started = true;
    }
    this.drive = function () {
        if (this.started) {
            console.log(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            console.log("Start the engine first.")
        }
    }
    this.stop = function () {
        this.started = false;
    }
}

let chevyParams = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};
let cadiParams = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};
let taxiParams = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};
let fiatParams = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "medium blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};
let testCarParams = {
    make: "Webville Motors",
    model: "Test Car",
    year: 2014,
    color: "marine",
    passengers: 2,
    convertible: true,
    mileage: 21
};

let chevy = new Car(chevyParams);
let cadi = new Car(cadiParams);
let taxi = new Car(taxiParams);
let fiat = new Car(fiatParams);
let testCar = new Car(testCarParams);

let cars = [chevy, cadi, taxi, fiat, testCar];

for (let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

let limoParams = {
    make: "Webville Motors",
    model: "limo",
    year: 1983,
    color: "black",
    passengers: 12,
    convertible: true,
    mileage: 21120
};

let limo = new Car(limoParams);
let limoDog = new Dog("Rhapsody In Blue", "Poodle", 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);

if (cadi instanceof Car) {
    console.log("Congrats, it's a car!")
}

function dogCatcher(obj) {
    return obj instanceof Dog;
}

function Cat(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let meow = new Cat("Meow", "Siamese", 10);
let whiskers = new Cat("Whiskers", "Mixed", 12);

let fido = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};

function Dog (name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        this.weight > 25 ? alert(this.name + " says Woof!") : alert(this.name + " says Yip!");
    };
}

let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    if (dogCatcher(dogs[i])) {
        console.log(dogs[i].name + " is a dog!");
    }
}

let now = new Date();

alert(now.getDay());

let array = new Array();

array[0] = 99;

let oddNumber = new Array(3);

oddNumber[0] = 1;
oddNumber[1] = 3;
oddNumber[2] = 5;

oddNumber.reverse();

alert(oddNumber.join(" - "));