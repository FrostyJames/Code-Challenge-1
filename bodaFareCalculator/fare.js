const readline = require("readline");

// Create an interface for user input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function calculateBodaFare() {
    rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (answer) => {
        let distanceInKm = parseFloat(answer); // Convert input to a number

        // Validate input
        if (isNaN(distanceInKm) || distanceInKm <= 0) {
            console.log("Tafadhali ingiza namba sahihi ya kilomita.");
            rl.close();
            return;
        }

        // Fare calculation
        const baseFare = 50;
        const chargePerKm = 15;
        const totalFare = baseFare + (distanceInKm * chargePerKm);

        // Display the fare breakdown
        console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
        console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
        console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
        console.log(`Total: KES ${totalFare}`);
        console.log("Panda Pikipiki!\n");

        rl.close();
    });
}


calculateBodaFare();