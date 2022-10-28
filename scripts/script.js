let taxi = {
    make: "Webville Motors",
    model: "taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,

    start: function () { this.started = true; },
    stop: function () { this.started = false; },
    drive: function () {
        //manage car code
    }
};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

let fIdo = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let dogs = [fIdo, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    let size = "small";

    if (dogs[i].weight > 10) {
        size = "large";
    }

    console.log("Dog: " + dogs[i].name + " is a " + size + " " + dogs[i].breed);

    dogs[i].bark();
}

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

function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
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