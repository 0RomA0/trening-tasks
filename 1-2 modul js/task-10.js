// ! 3 модуль
// Кількість слів у рядку
// Напиши функцію countWords(sentence), яка приймає рядок sentence і повертає кількість слів у цьому рядку.


//  Перевірка:
// console.log(countWords("Hello world!")); // 2
// console.log(countWords("JavaScript is an amazing language")); // 5
// console.log(countWords("Count the number of words in this sentence")); // 8


function countWords(sentence) {
    const wordArray = sentence.split(` `);
    return wordArray.length;
}


//  Перевірка:
console.log(countWords("Hello world!")); // 2
console.log(countWords("JavaScript is an amazing language")); // 5
console.log(countWords("Count the number of words in this sentence")); // 8