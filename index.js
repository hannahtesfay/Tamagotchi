// Tamagotchi: Create a text-based game in nodejs that enables us to control a pet via user input.
// Create a new class named Pet. A Pet should have at least three features name, happiness level, hunger level and any more you think are important.
// Create a function that asks the user for their input. This function should cope with the three following occasions:
// Creating a new pet and giving it a name and any other features defined.
// User wants to feed or play with their pet..
// User wants to check in with their pet and see how it’s happiness and hunger levels are. 
// Note: These will require you to create methods within your Pet class.
// Implement Error handling
// How can you make this a more engaging game? What else would be cool for your pet to do? Can the user choose the type of food they feed their pet, with the pet randomly deciding if they like it or not?

// const ui = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

class Pet {
    //Animal Constructor
    constructor(name, happiness, hunger, energy, boredom){
        this.name = name
        this.happiness = happiness
        this.hunger = hunger
        this.energy = energy
        this.boredom = boredom
    }
}

//set-up

let newPet;
function userInput() {
    // Creating a new pet and giving it a name and any other features defined.
    let petName = prompt("Please enter your pet's name");
    if (petName != null) {
        console.log(`Your new pet is called: ${petName}`)
    } else {
        prompt('Please enter a name')
    }
    //Happiness Bar
    let petHappiness = prompt("How happy is your pet? Give a rating from 1 (not happy) to 10 (happiest!)")
    if (petHappiness !=null) {
        console.log(`${petName}'s happiness level is ${petHappiness}!`)
    } else {
        prompt("Please enter a happiness level from 1 to 10")
    }

    // Hunger
    let petHunger = prompt(`How hungry is ${petName}? Please give a rating from 1 (full up) to 10 (starving)`);
    if (petHunger != null) {
        console.log(`Your pet ${petName} has a hunger level of ${petHunger} out of 10!`)
    } else {
        prompt('Please give a rating from 1 (full up) to 10 (starving)')
    }

    // Energy
    let petEnergy = prompt(`How much energy does ${petName} have? Please give a rating from 1 (little energy) to 10 (lots of energy)`);
    if (petEnergy != null) {
        console.log(`Your pet ${petName} has an energy level of ${petEnergy} out of 10!`)
    } else {
        prompt('Please give a rating from 1 (little energy) to 10 (lots of energy)')
    }

    // Boredom
    let petBoredom = prompt("How bored is your Pet? Give a rating from 1 (not bored) to 10 (very bored!)");
    if (petName != null) {
        console.log(`${petName}'s boredom level is ${petBoredom}!`)
    } else {
        prompt(`Please give a rating from 1 (little energy) to 10 (lots of energy)`)
    }

    let newPet = new Pet(petName, petHappiness, petHunger, petEnergy, petBoredom)
    console.log(newPet)
    
    // User wants to feed or play with their pet..

    function instructions() {
        //prompt asks for the activity
        let activity = prompt("What would you like to do? 1. Feed your pet 2. Check on your pet. Type in the number.")
        //switch statement
        switch (activity) {
            case "1":
                feedingPet(newPet)
                break;
            case "2":
                checkOnPet(newPet)
                break;
            default:
                let activity = prompt("Please enter 1 or 2.")
                instructions();
        }
    }

    instructions();


    // User wants to check in with their pet and see how it’s happiness and hunger levels are. 
}

userInput();


//Pet Name


function feedingPet(pet) {
    //check hunger level
    //1-3 (not hungry); 4-7; 8-10 (very hungry)
    const snacks =["apple", "banana", "pear"]
    const meals =["bolognese", "pizza", "chicken"]

    console.log(`${pet.name}'s hunger level is ${pet.hunger}`)

    if(pet.hunger < 4 && pet.hunger > 0) {
        console.log(`${pet.name} is not hungry! Try feeding them later?`)
    } else if(pet.hunger < 8) {
        let chosenFood = prompt(`Choose a snack for ${pet.name}: 1. Apples, 2. Banana, 3. Pear`)
    } else {
        let chosenFood = prompt(`Choose a snack or meal for ${pet.name}: Snacks = 1. Apples, 2. Banana, 3. Pear \n Meals = 1. Bolognese 2. Pizza 3. Chicken`)
    }
}

// User wants to check in with their pet and see how it’s happiness and hunger levels are. 
function checkOnPet(pet) {
    console.log(`${pet.name}'s happiness level is ${pet.happiness} \n${pet.name}'s hunger level is ${pet.hunger}`)
}
