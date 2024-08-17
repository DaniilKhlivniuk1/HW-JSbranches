
// 1
const text = "Заповнене поле";
const text1 = "Заповнене поля";
let isFilled = Boolean(text) && Boolean(text1);
console.log(text);
console.log(text1);
if (isFilled === true) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}
// 2
const number = Number.parseFloat(prompt("Будь ласка, введіть число, яке потрібно додати до суми"));
const number1 = Number.parseFloat(prompt("Будь ласка, введіть число, яке потрібно додати до суми"));
if (number + number1 > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}
// 3
const textjs = prompt("Будь ласка, введіть текст, щоб перевірити наявність слова JavaScript");
const check = textjs.includes("JavaScript");
if (check === true) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
// 4
const number2 = Number.parseFloat(prompt("Будь ласка, введіть число, щоб перевірити, чи входить воно в діапазон (10, 20)."));
if (number2 > 10 && number2 < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}
// 5
let userName = prompt("Будь ласка, введіть своє ім'я користувача");
if (userName.length < 3) {
  alert("Username must be at least 3 charachters long");
  userName = prompt("Будь ласка, введіть своє ім'я користувача");
} else {
  console.log(`Ваше ім'я ${userName}`);
}
let userEmail = prompt("Будь ласка, введіть свій gmail");
const hasAt = userEmail.includes("@.")
if (hasAt === false) {
  alert("Username must include @.");
  userEmail = prompt("Будь ласка, введіть свій gmail");
} else {
  console.log(`Your gmail is ${userEmail}`);
}
let userPassword = prompt("Будь ласка, введіть свій пароль");
if (userPassword.length < 6) {
  alert("Пароль має бути не менше 6 символів");
  userPassword = prompt("Будь ласка, введіть свій пароль");
} else {
  console.log(`Ваш пароль ${userPassword}`);
}