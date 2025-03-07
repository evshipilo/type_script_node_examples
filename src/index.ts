// console.log("Добро пожаловать на лекцию по TypeScript в Node.js!");

// // Пример базового TypeScript-кода
// const greet = (name: string): string => {
//     return `Привет, ${name}!`;
// };

// console.log(greet("участник"));


// ----------------------------------------------------------------------------

// console.log("=== Примеры приведения типов в TypeScript ===");

// // 🔹 Неявное приведение типов
// console.log("\n🔹 Неявное приведение типов");

// // Пример 1: Сложение числа и строки
// const num = 42; // Тип: number
// const str = "Привет"; // Тип: string

// // TypeScript автоматически приводит число к строке и выполняет конкатенацию
// const result1 = num + str; // Результат: "42Привет"
// console.log("Сложение числа и строки:", result1);

// // Пример 2: Логическое преобразование
// const isActive = 1; // Тип: number
// // TypeScript автоматически приводит число к логическому значению
// if (isActive) {
//   console.log("Число 1 интерпретируется как true");
// }

// // Пример 3: Преобразование null или undefined
// const maybeString: string | null = null;
// // TypeScript допускает неявное приведение null к строке
// const result2 = maybeString || "Значение по умолчанию"; // Результат: "Значение по умолчанию"
// console.log("Неявное приведение null:", result2);

// // 🔹 Явное приведение типов
// console.log("\n🔹 Явное приведение типов");

// // Пример 1: Использование оператора `as`
// const someValue: unknown = "Это строка"; // Тип: unknown (неизвестный тип)

// // Мы знаем, что это строка, и явно приводим тип
// const strLength1 = (someValue as string).length;
// console.log("Длина строки (as):", strLength1);

// // Пример 2: Использование угловых скобок `<Type>`
// const anotherValue: unknown = "Ещё одна строка";

// // Альтернативный способ явного приведения
// const strLength2 = (<string>anotherValue).length;
// console.log("Длина строки (<Type>):", strLength2);

// // Пример 3: Приведение к числу
// const stringNumber = "123"; // Тип: string

// // Преобразуем строку в число
// const convertedNumber = Number(stringNumber); // Результат: 123
// console.log("Явное приведение строки к числу:", convertedNumber);

// // Пример 4: Приведение к интерфейсу или объекту
// interface User {
//   name: string;
//   age: number;
// }

// const rawData: unknown = {
//   name: "Иван",
//   age: 30,
// };

// // Мы уверены, что rawData соответствует интерфейсу User
// const user = rawData as User;
// console.log("Явное приведение к интерфейсу:", user);

// // Пример 5: Приведение с потенциальной ошибкой
// const randomValue: unknown = "123abc";

// // Мы пытаемся привести значение к числу, но это может быть ошибкой
// const riskyConversion = Number(randomValue); // Результат: NaN
// console.log("Рискованное приведение строки к числу:", riskyConversion);

// // 🔹 Ошибки при неправильном приведении типов
// console.log("\n🔹 Ошибки при неправильном приведении типов");

// try {
//   const invalidValue: unknown = 42;

//   // Приведение числа к строке (ошибка на этапе выполнения, если использовать методы строки)
//   const invalidString = invalidValue as string;
//   console.log("Длина строки (ошибка):", invalidString.length); // Ошибка: length не существует у числа
// } catch (error) {
//   console.error("Ошибка при неправильном приведении типов:", error);
// }

// console.log("\n=== Конец примеров ===");




// ----------------------------------------------------------------------------




// console.log("=== Примеры Type Guards в TypeScript ===");

// // 🔹 typeof – Проверка примитивных типов
// console.log("\n🔹 typeof – Проверка примитивных типов");

// function processValue(value: string | number | boolean): void {
//   if (typeof value === "string") {
//     // Если тип переменной - строка
//     console.log(`Это строка: ${value.toUpperCase()}`);
//   } else if (typeof value === "number") {
//     // Если тип переменной - число
//     console.log(`Это число: ${value.toFixed(2)}`);
//   } else if (typeof value === "boolean") {
//     // Если тип переменной - булево значение
//     console.log(`Это булево значение: ${value ? "true" : "false"}`);
//   } else {
//     console.log("Неизвестный тип");
//   }
// }

// // Примеры вызова функции
// processValue("Привет");
// processValue(42.12345);
// processValue(true);

// // 🔹 instanceof – Проверка экземпляров классов
// console.log("\n🔹 instanceof – Проверка экземпляров классов");

// class Animal {
//   constructor(public name: string) {}
// }

// class Dog extends Animal {
//   constructor(name: string, public breed: string) {
//     super(name);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, public color: string) {
//     super(name);
//   }
// }

// function describeAnimal(animal: Animal): void {
//   if (animal instanceof Dog) {
//     // Если объект является экземпляром класса Dog
//     console.log(`Это собака породы ${animal.breed}, имя: ${animal.name}`);
//   } else if (animal instanceof Cat) {
//     // Если объект является экземпляром класса Cat
//     console.log(`Это кошка цвета ${animal.color}, имя: ${animal.name}`);
//   } else {
//     console.log(`Это животное, имя: ${animal.name}`);
//   }
// }

// // Примеры вызова функции
// const dog = new Dog("Шарик", "Лабрадор");
// const cat = new Cat("Мурка", "Черный");
// const genericAnimal = new Animal("Неизвестное животное");

// describeAnimal(dog);
// describeAnimal(cat);
// describeAnimal(genericAnimal);

// // 🔹 Предикаты типов (is)
// console.log("\n🔹 Предикаты типов (is)");

// // Интерфейс для проверки
// interface Fish {
//   swim: () => void;
// }

// interface Bird {
//   fly: () => void;
// }

// // Функция-предикат для проверки, является ли объект Fish
// function isFish(animal: Fish | Bird): animal is Fish {
//   return (animal as Fish).swim !== undefined;
// }

// // Функция обработки животных
// function moveAnimal(animal: Fish | Bird): void {
//   if (isFish(animal)) {
//     // Если это рыба
//     animal.swim();
//     console.log("Это рыба, она плавает.");
//   } else {
//     // Если это птица
//     animal.fly();
//     console.log("Это птица, она летает.");
//   }
// }

// // Примеры вызова функции
// const fish: Fish = {
//   swim: () => console.log("Рыба плывет"),
// };

// const bird: Bird = {
//   fly: () => console.log("Птица летит"),
// };

// moveAnimal(fish);
// moveAnimal(bird);

// // 🔹 Комбинированные проверки типов
// console.log("\n🔹 Комбинированные проверки типов");

// function processInput(input: unknown): void {
//   if (typeof input === "string") {
//     console.log(`Это строка: ${input}`);
//   } else if (typeof input === "number") {
//     console.log(`Это число: ${input}`);
//   } else if (input instanceof Array) {
//     console.log(`Это массив: ${input.join(", ")}`);
//   } else {
//     console.log("Неизвестный тип данных");
//   }
// }

// // Примеры вызова функции
// processInput("Привет");
// processInput(123);
// processInput([1, 2, 3]);
// processInput({ key: "value" });

// console.log("\n=== Конец примеров ===");



// ----------------------------------------------------------------------------



// console.log("=== Примеры unknown vs any в TypeScript ===");

// // 🔹 any – Отключение типизации
// console.log("\n🔹 any – Отключение типизации");

// // Пример 1: Использование any
// let anyValue: any = "Привет, мир!";

// // Можно выполнять любые операции, даже если они не имеют смысла
// console.log(anyValue.toUpperCase()); // Работает, так как это строка
// anyValue = 42;
// console.log(anyValue.toFixed(2)); // Работает, так как это число
// anyValue = true;
// console.log(anyValue + 10); // Работает, но результат непредсказуемый (true преобразуется в 1)

// // Проблема: TypeScript не предупреждает о возможных ошибках
// anyValue = {};
// console.log(anyValue.nonExistentProperty); // Ошибка на этапе выполнения, но TypeScript не предупреждает

// // 🔹 unknown – Безопасная альтернатива any
// console.log("\n🔹 unknown – Безопасная альтернатива any");

// // Пример 2: Использование unknown
// let unknownValue: unknown = "Привет, мир!";

// // Нельзя выполнять операции без проверки типа
// // console.log(unknownValue.toUpperCase()); // Ошибка компиляции: Object is of type 'unknown'

// // Нужно сначала проверить тип
// if (typeof unknownValue === "string") {
//   console.log(unknownValue.toUpperCase()); // Работает, так как мы проверили, что это строка
// }

// unknownValue = 42;
// if (typeof unknownValue === "number") {
//   console.log(unknownValue.toFixed(2)); // Работает, так как это число
// }

// // Пример 3: Использование Type Guards с unknown
// function processUnknown(value: unknown): void {
//   if (typeof value === "string") {
//     console.log(`Это строка: ${value.toUpperCase()}`);
//   } else if (typeof value === "number") {
//     console.log(`Это число: ${value.toFixed(2)}`);
//   } else if (typeof value === "boolean") {
//     console.log(`Это булево значение: ${value ? "true" : "false"}`);
//   } else {
//     console.log("Неизвестный тип данных");
//   }
// }

// // Примеры вызова функции
// processUnknown("Привет");
// processUnknown(123.456);
// processUnknown(true);
// processUnknown({ key: "value" });

// // 🔹 Сравнение any и unknown
// console.log("\n🔹 Сравнение any и unknown");

// // Пример 4: any позволяет делать всё
// function processAny(value: any): void {
//   console.log(value.toUpperCase()); // Работает, даже если это не строка (ошибка на этапе выполнения)
// }

// // processAny(42); // Ошибка на этапе выполнения: value.toUpperCase is not a function

// // Пример 5: unknown требует проверки типа
// function processSafeUnknown(value: unknown): void {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase()); // Работает, так как мы проверили тип
//   } else {
//     console.log("Тип не строка, операция невозможна");
//   }
// }

// // Безопасно обрабатываем данные
// processSafeUnknown("Привет");
// processSafeUnknown(42);

// // 🔹 Лучшие практики
// console.log("\n🔹 Лучшие практики");

// // Пример 6: Используйте unknown, если тип данных заранее неизвестен
// function handleInput(input: unknown): void {
//   if (typeof input === "string") {
//     console.log(`Это строка: ${input}`);
//   } else if (typeof input === "number") {
//     console.log(`Это число: ${input}`);
//   } else {
//     console.log("Неизвестный тип данных");
//   }
// }

// // Пример вызова функции
// handleInput("Привет");
// handleInput(123);
// handleInput(true);

// // Пример 7: Избегайте any, если нет веских причин
// function unsafeFunction(input: any): void {
//   console.log(input.toUpperCase()); // Ошибка на этапе выполнения, если input не строка
// }

// // unsafeFunction(42); // Ошибка на этапе выполнения

// console.log("\n=== Конец примеров ===");




// ----------------------------------------------------------------------------


// console.log("=== Разница между never и void в TypeScript ===");

// // 🔹 void – отсутствие возвращаемого значения
// console.log("\n🔹 void – отсутствие возвращаемого значения");

// // Функция с типом void
// function logMessage(message: string): void {
//   console.log(`Сообщение: ${message}`);
//   // return; // Допустимо: функция завершает выполнение без возврата значимого значения
// }

// // Вызов функции
// logMessage("Привет, мир!");

// // void означает, что функция завершается корректно, но ничего не возвращает.
// // Например, функция может выполнять побочные эффекты, такие как логирование или изменение DOM.

// // 🔹 never – функция, которая никогда не завершает выполнение
// console.log("\n🔹 never – функция, которая никогда не завершает выполнение");

// // Функция с типом never
// function throwError(message: string): never {
//   throw new Error(message); // Функция завершает выполнение с ошибкой и никогда не возвращает значение
// }

// // Вызов функции
// try {
//   throwError("Это ошибка!"); // Программа завершает выполнение внутри этой функции
// } catch (error) {
//   console.error("Поймана ошибка:", error);
// }

// // Функция с типом never используется для случаев, когда выполнение программы прерывается,
// // например, при выбрасывании исключения или бесконечном цикле.

// // Пример 2: Бесконечный цикл
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Этот цикл никогда не завершится");
//   }
// }

// // infiniteLoop(); // Если вызвать эту функцию, программа застрянет в бесконечном цикле

// // 🔹 Сравнение void и never
// console.log("\n🔹 Сравнение void и never");

// // Пример 1: Функция с void
// function processData(data: string): void {
//   console.log(`Обработка данных: ${data}`);
//   return; // Допустимо: функция завершает выполнение без возврата значимого значения
// }

// // Пример 2: Функция с never
// function validateData(data: string): never {
//   if (data === "") {
//     throw new Error("Данные не могут быть пустыми"); // Функция завершает выполнение с ошибкой
//   }
//   // return; // Ошибка компиляции: Функция с типом never не может завершиться корректно
// }

// // Вызов функций
// processData("Пример данных");
// // validateData(""); // Если вызвать, программа завершится с ошибкой

// // 🔹 Использование never в проверках типов
// console.log("\n🔹 Использование never в проверках типов");

// // Пример 1: Проверка исчерпывающих условий
// type Animal = "dog" | "cat" | "bird";

// function handleAnimal(animal: Animal): void {
//   switch (animal) {
//     case "dog":
//       console.log("Это собака");
//       break;
//     case "cat":
//       console.log("Это кошка");
//       break;
//     case "bird":
//       console.log("Это птица");
//       break;
//     default:
//       const exhaustiveCheck: never = animal; // Ошибка компиляции, если animal имеет недопустимое значение
//       console.log("Неизвестное животное:", exhaustiveCheck);
//   }
// }

// // Вызов функции
// handleAnimal("dog");

// // 🔹 Основные отличия между void и never
// console.log("\n🔹 Основные отличия между void и never");

// // 1. **void**:
// //    - Используется для функций, которые завершают выполнение корректно, но ничего не возвращают.
// //    - Пример: логирование, обработка данных без возврата результата.
// //    - Допустимо использовать `return;`, но нельзя возвращать значимое значение (например, `return 5;`).

// // 2. **never**:
// //    - Используется для функций, которые никогда не завершают выполнение корректно.
// //    - Пример: выбрасывание исключений, бесконечные циклы.
// //    - Нельзя использовать `return;`, так как функция не должна завершаться.

// console.log("\n=== Конец примеров ===");





// ----------------------------------------------------------------------------





// console.log("=== Импорт и экспорт в TypeScript ===");

// // 📌 Импорт поименованных сущностей (named export) деструктуризация обьекта
// import { add, subtract } from "./mathUtils";
// import { toUpperCase, toLowerCase } from "./stringUtils";

// // 📌 Импорт по умолчанию (default export) только 1 на модуль
// import multiply from "./mathUtils";
// import reverseString from "./stringUtils";

// // Использование mathUtils
// console.log("\n=== mathUtils ===");
// console.log("Сложение (add):", add(5, 3)); // 8
// console.log("Вычитание (subtract):", subtract(5, 3)); // 2
// console.log("Умножение (multiply):", multiply(5, 3)); // 15

// // Использование stringUtils
// console.log("\n=== stringUtils ===");
// console.log("Верхний регистр (toUpperCase):", toUpperCase("hello")); // "HELLO"
// console.log("Нижний регистр (toLowerCase):", toLowerCase("WORLD")); // "world"
// console.log("Реверс строки (reverseString):", reverseString("TypeScript")); // "tpircSyepT"

// // 📌 Импорт всего модуля как объекта
// import * as MathUtils from "./mathUtils";
// import * as StringUtils from "./stringUtils";

// console.log("\n=== Импорт всего модуля ===");
// console.log("Сложение через MathUtils:", MathUtils.add(10, 20)); // 30
// console.log("Реверс строки через StringUtils:", StringUtils.default("Module")); // "eludoM"

// // 📌 Динамический импорт (lazy loading)
// console.log("\n=== Динамический импорт ===");

// async function dynamicImportExample() {
//   const { add } = await import("./mathUtils");
//   console.log("Сложение через динамический импорт:", add(7, 8)); // 15
// }

// dynamicImportExample();

// // Статический импорт выполняется на этапе компиляции (или загрузки модуля). 
// // Это означает, что все модули, которые импортируются с помощью import, загружаются до выполнения кода.
// // Выполняется до выполнения кода.
// // Поддерживает tree-shaking (удаление неиспользуемых частей модуля при сборке).
// // Ускоряет выполнение программы, так как все модули уже загружены.
// // Не может быть использован внутри условий (if, switch) или функций.

// // Динамический импорт выполняется во время выполнения программы (runtime). 
// // Это означает, что модуль загружается только тогда, когда код достигает вызова import().
// // Когда используется:
// // Когда модуль нужен только в определенных условиях.
// // Когда модуль редко используется, и его загрузка заранее нецелесообразна.
// // Когда нужно уменьшить размер основного бандла (lazy loading).
// // Когда модуль зависит от пользовательского ввода или других данных, доступных только во время выполнения.




// ----------------------------------------------------------------------------


// console.log("=== Пример использования Namespaces ===");

// // Пространства имен (Namespaces) работают только в глобальной области видимости или в файлах, 
// // которые компилируются в один файл с помощью опции outFile в tsconfig.json.
// //  Если вы используете модули (например, import/export), пространства имен не будут работать так, как ожидается.

// // Доступ к классам и функциям через пространство имен Geometry
// const circle = new Geometry.Circle(5);
// console.log("Площадь круга:", circle.getArea()); // Площадь круга: 78.53981633974483

// const rectangle = new Geometry.Rectangle(10, 20);
// console.log("Площадь прямоугольника:", rectangle.getArea()); // Площадь прямоугольника: 200

// console.log(
//   "Периметр прямоугольника:",
//   Geometry.getPerimeter(10, 20)
// ); // Периметр прямоугольника: 60



// ----------------------------------------------------------------------------





