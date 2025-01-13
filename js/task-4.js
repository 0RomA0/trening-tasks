// Замовлення продуктів
// Напиши функцію buyGroceries(itemsCount, pricePerItem, walletAmount), яка визначає, чи може клієнт оплатити замовлення.

// Умови:

// Якщо грошей недостатньо, поверни рядок "Not enough money!".
// Якщо грошей вистачає, поверни рядок "You bought <itemsCount> items for <totalCost> credits!".


// // Перевірка:
// console.log(buyGroceries(5, 20, 150)); // "You bought 5 items for 100 credits!"
// console.log(buyGroceries(10, 15, 100)); // "Not enough money!"
// console.log(buyGroceries(3, 30, 90)); // "You bought 3 items for 90 credits!"

function buyGroceries(itemsCount, pricePerItem, walletAmount) {
    const totalCost = itemsCount * pricePerItem;
    if (walletAmount >= totalCost) {
        return `You bought ${itemsCount} items for ${totalCost} credits!`;
    } else {
        return "Not enough money!";
}
    
}

console.log(buyGroceries(5, 20, 150)); // "You bought 5 items for 100 credits!"
console.log(buyGroceries(10, 15, 100)); // "Not enough money!"
console.log(buyGroceries(3, 30, 90)); // "You bought 3 items for 90 credits!"