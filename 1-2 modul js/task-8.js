
// Задача
// Напишіть цикл, який виводить у консоль числа від min до включно max за зростанням.
// Додайте всі непарні числа від min до max та виведіть їх суму.

const min = 20;
const max = 89;

 let sum = 0;

for (let i = min; i <= max; i++) {
    console.log(i);

 if (i % 2 !== 0) {
     sum += i; 
    
    }
   
}

console.log(`Сума непарних чисел : ${sum}`);
