function calculateBodaFare(distanceInKm) {
    let baseFare = 50; // KES
    let chargePerKm = 15; // KES
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log(`Panda Pikipiki!`);
}

// Prompt the user for input
let distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?"));
calculateBodaFare(distanceInKm);