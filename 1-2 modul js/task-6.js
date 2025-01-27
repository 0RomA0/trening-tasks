// Задача: є 3 групи висоти:

// низький (0-150 см),
// середній (151-180 см),
// високий (181-250 см).
// До якої групи належить Олег, якщо його зріст — 175 см? Назву групи вивести на екран.

const name = `Олег`;
const olegHeight = 175;


const firstGroup = `низький зріст`;
const secondGroup = `середній зріст`;
const thirdGroup = `високий зріст`;


if (olegHeight <= 150) {
    console.log( `${name} належить до групи ${firstGroup}`);   
} else if (olegHeight >= 151 && olegHeight <= 180) {
   console.log(`${name} належить до групи ${secondGroup}`); 
} else if (olegHeight >= 181 && olegHeight <= 250) {
    console.log( `${name} належить до групи ${thirdGroup}`);
}