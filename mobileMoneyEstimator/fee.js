function estimateTransactionFee(amountToSend) {
    let feePercentage = 0.015; // 1.5%
    let minimumFee = 10; // KES
    let maximumFee = 70; // KES

    let calculatedFee = amountToSend * feePercentage;
    let transactionFee = Math.max(minimumFee, Math.min(calculatedFee, maximumFee));
    let totalAmount = amountToSend + transactionFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${transactionFee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log(`Send Money Securely!`);
}

// Prompt the user for input
let amountToSend = Number(prompt("Unatuma Ngapi? (KES)"));
estimateTransactionFee(amountToSend);