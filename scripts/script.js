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
}