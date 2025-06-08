const readline = require("readline");

// Create an interface for user input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to estimate transaction fee
function estimateTransactionFee() {
    rl.question("Unatuma Ngapi? (KES): ", (answer) => {
        let amountToSend = parseFloat(answer); // Convert input to a number

        // Validate input
        if (isNaN(amountToSend) || amountToSend <= 0) {
            console.log("Tafadhali ingiza kiasi sahihi cha pesa.");
            rl.close();
            return;
        }

        // Fee calculation
        const feePercentage = 0.015; // 1.5%
        const minFee = 10;
        const maxFee = 70;
        let transactionFee = amountToSend * feePercentage;

        // Apply fee limits
        transactionFee = Math.max(minFee, Math.min(transactionFee, maxFee));

        // Calculate total amount to be debited
        const totalAmount = amountToSend + transactionFee;

        // Display the fee breakdown
        console.log(`\nSending KES ${amountToSend}:`);
        console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
        console.log(`Total amount to be debited: KES ${totalAmount}`);
        console.log("Send Money Securely!\n");

        rl.close();
    });
}

// Run the function
estimateTransactionFee();