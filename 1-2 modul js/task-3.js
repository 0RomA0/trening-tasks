// Фільтрування за парністю
// Напиши функцію filterEvenNumbers(numbers), яка приймає масив чисел numbers і повертає новий масив тільки з парних чисел.


//  Перевірка:
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(filterEvenNumbers([7, 11, 15, 18, 22])); // [18, 22]
// console.log(filterEvenNumbers([3, 5, 7])); // []


// First way

function filterEvenNumbers(numbers) {
    let newArray = [];
    for (const arg of numbers) {

        if (arg % 2 === 0) {
           newArray.push(arg);
        }
    } 
    return newArray;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(filterEvenNumbers([7, 11, 15, 18, 22])); // [18, 22]
console.log(filterEvenNumbers([3, 5, 7])); // []

// Second method

// function filterEvenNumbers(numbers) {
//     let newArray = [];
//     for (let i = 0; i < numbers.length; i++) {
        
//         if (numbers[i] % 2 === 0) {
//           newArray.push(numbers[i]);
//         }
        
//     }
//     return newArray;
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// console.log(filterEvenNumbers([7, 11, 15, 18, 22])); // [18, 22]
// console.log(filterEvenNumbers([3, 5, 7])); // []