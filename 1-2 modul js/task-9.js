//? Перевірка паліндромів 
// ! 3 модуль
// Напиши функцію isPalindrome(word), яка перевіряє, чи є слово паліндромом.

// Умови:

// Паліндром — це слово, яке читається однаково зліва направо і справа наліво.
// Якщо слово є паліндромом, поверни "Palindrome!".
// Якщо ні, поверни "Not a palindrome!".


//TODO Перевірка:
// console.log(isPalindrome("level")); // "Palindrome!"
// console.log(isPalindrome("world")); // "Not a palindrome!"
// console.log(isPalindrome("madam")); // "Palindrome!"
// console.log(isPalindrome("hello")); // "Not a palindrome!"


function isPalindrome(word) {
    const normalizeWord = word.toLowerCase();
    const reverseWord = normalizeWord.split(``).reverse().join(``);
    if (normalizeWord === reverseWord) {
        return ` ${word} is a Palindrome!`;
    }
    return `${word} not a palindrome!`;
}

// Перевірка:
console.log(isPalindrome("level")); // "Palindrome!"
console.log(isPalindrome("world")); // "Not a palindrome!"
console.log(isPalindrome("madam")); // "Palindrome!"
console.log(isPalindrome("hello")); // "Not a palindrome!"
