const fs = require("fs");
const { errors } = require("undici-types");

// * Читання файлів

// * Функція асинхронна
// fs.readFile("./docs/Blog1.txt", (error, data) => {
//   if (error) {
//     console.log(error);
//   }
// ? data у звичайному вигляді є баффером
//   console.log(data.toString());
// });
// * Тому, це виведеться швидше
// console.log("sdadasd");

// * Запис тексту у файл
// fs.writeFile("./docs/Blog1.txt", "Hello, Svitlana", () => {
//   console.log("File has been written");
// });

// * Так як файлу з такою назвою не існує, фунція створює новий файл із задани текстом
// fs.writeFile("./docs/Blog3.txt", "Hello, Svitlana", () => {
//   console.log("File has been written");
// });

// * Перевірка на існування папки
if (!fs.existsSync("./styles")) {
  // * Створення папки
  fs.mkdir("./styles", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./styles", (errors) => {
    if (errors) console.log(errors);
    console.log("folder deleted");
  });
}
