function Traveler (name, food=1, isHealthy=true) {
    //a name (string) that must be provided as a parameter to the constructor
    this.name = name; 

    //an amount of food (number) with an initial value of 1
    this.food = food;

    //an isHealthy (boolean) to indicate whether they are sick, with an initial value of true
    this.isHealthy = isHealthy;
}
Traveler.prototype = {
    constructor: Traveler,
    hunt: function () {
        this.food += 2;
        // Increase the traveler's food by 2.

    },
    eat: function () {
        // Consumes 1 unit of the traveler's food. If the traveler doesn't have any food to eat, the traveler is no longer healthy.
        this.food -= 1;
        if(this.food <= 0){
            this.isHealthy = false
        }
    }
}



function Wagon (capacity=3, passengers) {
    //a capacity (number) that must be provided as a parameter to the constructor, sets the maximum number of passengers the wagon can hold
    this.capacity = capacity;

    //a passengers list (array) which is initially empty
    this.passengers = passengers;
}
Wagon.prototype = {
    constructor: Wagon,
    getAvailableSeatCount: function () {
        // Return the number of empty seats, determined by the capacity set when the wagon was created, compared to the number of passengers currently on board.
        this.getAvailableSeatCount = this.capacity - this.passengers;
    },
    join: function () {
        // Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them
        if(this.getAvailableSeatCount >= 1){
            this.Wagon.push(this.passengers) = this.Traveler
        }
    },
    shouldQuarantine: function() {
        //Return true if there is at least one unhealthy person in the wagon. Return false if not.
    },
    totalFood: function() {
        //Return the total amount of food among all occupants of the wagon.
    }
}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);