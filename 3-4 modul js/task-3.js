// 1)

/**
 *? Напишіть функцію updateProductQuantity(products, productName, quantity),
 *? яка приймає масив об'єктів, назву продукту та кількість.
 *? Функція повинна знайти продукт із заданою назвою та
 *? змінити його кількість на передане значення.
 *? Якщо продукт із такою назвою не знайдено — додати новий об'єкт.
 */

const products = [
  { name: "Milk", price: 25, quantity: 12 },
  { name: "Bread", price: 15, quantity: 20 },
  { name: "Cheese", price: 50, quantity: 5 },
];




// 2)

/**
 *? Створіть функцію calculateTotalIncome(items),
 *? яка приймає масив об'єктів.
 *? Кожен об'єкт містить поля: name, price, quantity.
 *? Функція має повернути загальний дохід магазину
 *? (сума всіх цін, помножених на кількість).
 */

const items = [
  { name: "TV", price: 4000, quantity: 3 },
  { name: "Phone", price: 1500, quantity: 10 },
  { name: "Laptop", price: 25000, quantity: 1 },
];
