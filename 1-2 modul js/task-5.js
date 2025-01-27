// Фільтрація довжини рядків у масиві
// Напиши функцію filterByLength(strings, maxLength), яка приймає масив рядків strings і число maxLength.
// Функція повинна повернути новий масив, що містить лише ті рядки, довжина яких не перевищує maxLength.


//  Перевірка:
// console.log(filterByLength(["apple", "banana", "cherry", "fig"], 5)); // ["apple", "fig"]
// console.log(filterByLength(["JavaScript", "HTML", "CSS"], 3)); // ["CSS"]
// console.log(filterByLength([], 4)); // []

function filterByLength(strings, maxLength) {
    let newArray = [];
    for (const array of strings) {
        if (array.length <= maxLength) { 
            newArray.push(array);
        }
    }
    return newArray;
}

console.log(filterByLength(["apple", "banana", "cherry", "fig"], 5)); // ["apple", "fig"]
console.log(filterByLength(["JavaScript", "HTML", "CSS"], 3)); // ["CSS"]
console.log(filterByLength([], 4)); // []