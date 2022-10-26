let taxi = {
    make: "Webville Motors",
    model: "taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,

    start: function () { this.started = true },
    stop: function () { this.started = false },
    drive: function () {
        //manage car code
    }
};