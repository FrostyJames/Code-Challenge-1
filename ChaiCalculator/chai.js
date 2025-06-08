const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculateChaiIngredients() {
    rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (answer) => {
        let numberOfCups = parseInt(answer, 10);

        if (isNaN(numberOfCups) || numberOfCups <= 0) {
            console.log("Please enter a valid number of cups.");
            rl.close();
            return;
        }

        const water = numberOfCups * 200;
        const milk = numberOfCups * 50;
        const teaLeaves = numberOfCups * 1;
        const sugar = numberOfCups * 2;

        console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
        console.log(`Water: ${water} ml`);
        console.log(`Milk: ${milk} ml`);
        console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
        console.log(`Sugar (Sukari): ${sugar} teaspoons`);
        console.log("Enjoy your Chai Bora!");

        rl.close();
    });
}

calculateChaiIngredients();