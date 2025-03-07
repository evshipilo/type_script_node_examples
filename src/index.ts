// // === Типизация переменных в TypeScript ===

// // ✅ Примитивные типы
// // Примитивные типы включают string, number, boolean, bigint, symbol, null и undefined.

// const name1: string = "Alice"; // Строка
// const age: number = 25; // Число
// const isStudent: boolean = true; // Булево значение
// const bigNumber: bigint = 9007199254740991n; // Большое число
// const uniqueId: symbol = Symbol("id"); // Символ
// const emptyValue: null = null; // Null
// const notAssigned: undefined = undefined; // Undefined

// // Попытка присвоить значение другого типа вызовет ошибку
// // name = 123; // Ошибка: Type 'number' is not assignable to type 'string'

// // ✅ Объектные типы
// // Объектные типы включают object, Array, Function и другие сложные структуры.

// // Объект
// const user: object = { id: 1, name: "Alice" };

// // Массив
// const numbers: number[] = [1, 2, 3, 4, 5]; // Массив чисел
// const strings: Array<string> = ["Alice", "Bob", "Charlie"]; // Альтернативный синтаксис

// // Функция
// const greet: (name: string) => string = (name) => `Hello, ${name}!`;
// console.log(greet("Alice")); // Hello, Alice!

// // ✅ Специальные типы
// // Специальные типы включают any, unknown, never и void.

// // Тип any (избегайте его использования, если возможно)
// let dynamicValue: any = "Hello";
// dynamicValue = 42; // Допустимо, но небезопасно

// // Тип unknown (более безопасная альтернатива any)
// let unknownValue: unknown = "Hello";
// // console.log(unknownValue.toUpperCase()); // Ошибка: Object is of type 'unknown'
// if (typeof unknownValue === "string") {
//   console.log(unknownValue.toUpperCase()); // HELLO
// }

// // Тип void (для функций, которые ничего не возвращают)
// function logMessage(message: string): void {
//   console.log(message);
// }
// logMessage("This is a message");

// // Тип never (для функций, которые никогда не завершаются корректно)
// function throwError(message: string): never {
//   throw new Error(message);
// }

// // ✅ Пользовательские типы
// // TypeScript позволяет создавать собственные типы с помощью interface, type, enum, union и intersection.

// // Интерфейс
// interface User {
//   id: number;
//   name: string;
//   email: string;
//   age?: number; // Необязательное поле
// }

// const user1: User = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
// };

// // Тип
// type Point = {
//   x: number;
//   y: number;
// };

// const point: Point = { x: 10, y: 20 };

// // Перечисление (enum)
// enum Color {
//   Red = "RED",
//   Green = "GREEN",
//   Blue = "BLUE",
// }

// const favoriteColor: Color = Color.Red;
// console.log(favoriteColor); // RED

// // Объединение типов (union)
// type ID = string | number;

// const userId: ID = 123; // Допустимо
// const anotherUserId: ID = "abc"; // Допустимо

// // Пересечение типов (intersection)
// type Admin = User & { role: string };

// const admin: Admin = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
//   role: "Administrator",
// };

// // ✅ Type Inference (Автоматическое определение типов)
// // TypeScript может автоматически определять тип переменной, если ей сразу присвоено значение.

// let autoName = "Alice"; // Тип: string
// let autoAge = 25; // Тип: number
// let isActive = true; // Тип: boolean

// // Попытка присвоить значение другого типа вызовет ошибку
// // autoName = 123; // Ошибка: Type 'number' is not assignable to type 'string'

// // ✅ Когда лучше явно указывать тип?
// // 1. Когда переменная может принимать значения разных типов в будущем.
// let id: string | number; // Переменная может быть строкой или числом
// id = 123; // Допустимо
// id = "abc"; // Допустимо

// // 2. Когда тип не очевиден из контекста.
// const parseJson = (json: string): object => JSON.parse(json);

// // 3. Когда вы хотите улучшить читаемость и документацию.
// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const product: Product = { id: 1, name: "Laptop", price: 1000 };



// // ✅ Пример использования утилит TypeScript
// // TypeScript предоставляет утилиты для работы с типами, такие как Partial, Pick, Omit.

// // Partial: делает все поля необязательными
// const partialUser: Partial<User> = { name: "Alice" };

// // Pick: выбирает только указанные поля
// const pickedUser: Pick<User, "id" | "name"> = { id: 1, name: "Alice" };

// // Omit: исключает указанные поля
// const omittedUser: Omit<User, "email"> = { id: 1, name: "Alice", age: 25 };




// ----------------------------------------------------------------------------



// // ===== Массивы и кортежи в TypeScript ===

// // ✅ Массивы
// // Массивы в TypeScript могут быть типизированы двумя способами:
// // 1. Синтаксис через квадратные скобки (T[])
// // 2. Обобщенный синтаксис (Array<T>)

// // === Примеры массивов одного типа ===

// // Массив чисел
// const numbers: number[] = [1, 2, 3, 4, 5]; // Синтаксис через квадратные скобки
// const moreNumbers: Array<number> = [6, 7, 8, 9, 10]; // Обобщенный синтаксис

// // Массив строк
// const names: string[] = ["Alice", "Bob", "Charlie"];
// const moreNames: Array<string> = ["David", "Eve", "Frank"];

// // Попытка добавить элемент другого типа вызовет ошибку
// // numbers.push("string"); // Ошибка: Argument of type 'string' is not assignable to parameter of type 'number'

// // Пример использования
// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(names); // ["Alice", "Bob", "Charlie"]

// // === Примеры массивов с несколькими типами (объединение типов) ===

// // Массив, который может содержать строки и числа
// const mixedArray: (string | number)[] = [1, "Alice", 2, "Bob"];

// // Добавление элементов допустимых типов
// mixedArray.push(3); // ОК
// mixedArray.push("Charlie"); // ОК

// // Попытка добавить элемент другого типа вызовет ошибку
// // mixedArray.push(true); // Ошибка: Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// console.log(mixedArray); // [1, "Alice", 2, "Bob", 3, "Charlie"]

// // === Пример массивов объектов ===

// // Интерфейс для описания структуры объекта
// interface User {
//   id: number;
//   name: string;
// }

// // Массив объектов типа User
// const users: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// // Добавление нового объекта
// users.push({ id: 3, name: "Charlie" });

// // Попытка добавить объект с отсутствующими полями вызовет ошибку
// // users.push({ id: 4 }); // Ошибка: Property 'name' is missing in type '{ id: number; }' but required in type 'User'

// console.log(users);
// // [
// //   { id: 1, name: "Alice" },
// //   { id: 2, name: "Bob" },
// //   { id: 3, name: "Charlie" }
// // ]

// // ✅ Кортежи (Tuples)
// // Кортежи — это массивы с фиксированным количеством элементов, где каждый элемент имеет определенный тип.

// // === Примеры простых кортежей ===

// // Кортеж с двумя элементами: строка и число
// const user: [string, number] = ["Alice", 25];

// // Доступ к элементам кортежа
// console.log(user[0]); // "Alice"
// console.log(user[1]); // 25

// // Попытка изменить элемент на значение другого типа вызовет ошибку
// // user[0] = 123; // Ошибка: Type 'number' is not assignable to type 'string'

// // Добавление нового элемента в кортеж вызовет ошибку
// // user.push("extra"); // Ошибка: Tuple type '[string, number]' of fixed length 2 cannot have elements added beyond its length

// // === Кортежи с необязательными элементами ===

// // Кортеж с необязательным третьим элементом
// const userWithOptional: [string, number, string?] = ["Alice", 25];

// // Третий элемент может отсутствовать
// console.log(userWithOptional); // ["Alice", 25]

// // Добавление третьего элемента
// userWithOptional[2] = "Developer";
// console.log(userWithOptional); // ["Alice", 25, "Developer"]

// // === Кортежи с несколькими типами ===

// // Кортеж для хранения идентификатора и данных
// type DataTuple = [number, string, boolean];

// const data: DataTuple = [1, "Alice", true];

// // Доступ к элементам
// console.log(data[0]); // 1
// console.log(data[1]); // "Alice"
// console.log(data[2]); // true

// // Попытка изменить элемент на значение другого типа вызовет ошибку
// // data[1] = 123; // Ошибка: Type 'number' is not assignable to type 'string'

// // === Использование кортежей в функциях ===

// // Функция возвращает кортеж
// function getUserInfo(): [string, number] {
//   const name = "Alice";
//   const age = 25;
//   return [name, age];
// }

// const [userName, userAge] = getUserInfo();
// console.log(`Name: ${userName}, Age: ${userAge}`); // Name: Alice, Age: 25

// // === Комбинирование массивов и кортежей ===

// // Массив кортежей
// const userData: [number, string][] = [
//   [1, "Alice"],
//   [2, "Bob"],
//   [3, "Charlie"],
// ];

// // Добавление нового кортежа
// userData.push([4, "David"]);

// // Попытка добавить кортеж с неправильными типами вызовет ошибку
// // userData.push(["Eve", 5]); // Ошибка: Type 'string' is not assignable to type 'number'

// console.log(userData);
// // [
// //   [1, "Alice"],
// //   [2, "Bob"],
// //   [3, "Charlie"],
// //   [4, "David"]
// // ]




// ----------------------------------------------------------------------------



// // === Перечисления (Enums) в TypeScript ===

// // ✅ Числовые перечисления (Numeric Enums)
// // По умолчанию значения перечисления — это числа, начиная с 0.
// enum Status {
//     Pending, // 0
//     InProgress, // 1
//     Completed, // 2
//     Failed, // 3
//   }
  
//   // Использование числового перечисления
//   const currentStatus: Status = Status.InProgress;
  
//   console.log(currentStatus); // 1
//   console.log(Status[1]); // "InProgress"
  
//   // Пример использования в функции
//   function getStatusMessage(status: Status): string {
//     switch (status) {
//       case Status.Pending:
//         return "The task is pending.";
//       case Status.InProgress:
//         return "The task is in progress.";
//       case Status.Completed:
//         return "The task is completed.";
//       case Status.Failed:
//         return "The task has failed.";
//       default:
//         return "Unknown status.";
//     }
//   }
  
//   console.log(getStatusMessage(currentStatus)); // The task is in progress.
  
//   // ✅ Строковые перечисления (String Enums)
//   // В строковых перечислениях каждому элементу присваивается строковое значение.
//   enum Role {
//     Admin = "ADMIN",
//     User = "USER",
//     Guest = "GUEST",
//   }
  
//   // Использование строкового перечисления
//   const userRole: Role = Role.Admin;
  
//   console.log(userRole); // "ADMIN"
  
//   // Пример использования в функции
//   function getRolePermissions(role: Role): string {
//     switch (role) {
//       case Role.Admin:
//         return "Admin has full access.";
//       case Role.User:
//         return "User has limited access.";
//       case Role.Guest:
//         return "Guest has minimal access.";
//       default:
//         return "Unknown role.";
//     }
//   }
  
//   console.log(getRolePermissions(userRole)); // Admin has full access.
  
//   // ✅ Гетерогенные перечисления (Heterogeneous Enums)
//   // Гетерогенные перечисления могут содержать как числа, так и строки.
//   enum MixedEnum {
//     Yes = "YES",
//     No = 0,
//   }
  
//   console.log(MixedEnum.Yes); // "YES"
//   console.log(MixedEnum.No); // 0
  
//   // ✅ Пример использования перечислений в реальной жизни
  
//   // Перечисление для дней недели
//   enum DaysOfWeek {
//     Monday = "MON",
//     Tuesday = "TUE",
//     Wednesday = "WED",
//     Thursday = "THU",
//     Friday = "FRI",
//     Saturday = "SAT",
//     Sunday = "SUN",
//   }
  
//   // Функция для проверки рабочего дня
//   function isWorkingDay(day: DaysOfWeek): boolean {
//     switch (day) {
//       case DaysOfWeek.Saturday:
//       case DaysOfWeek.Sunday:
//         return false; // Выходные
//       default:
//         return true; // Рабочие дни
//     }
//   }
  
//   console.log(isWorkingDay(DaysOfWeek.Monday)); // true
//   console.log(isWorkingDay(DaysOfWeek.Sunday)); // false
  
//   // ✅ Перечисления с явным указанием значений
//   // Можно явно указать значения для элементов перечисления.
//   enum HttpStatus {
//     OK = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
//     Forbidden = 403,
//     NotFound = 404,
//   }
  
//   // Использование перечисления
//   const responseStatus: HttpStatus = HttpStatus.OK;
  
//   console.log(responseStatus); // 200
//   console.log(HttpStatus[200]); // "OK"
  
//   // ✅ Перечисления и их типы
//   // Перечисления можно использовать как типы для переменных и параметров функций.
//   function handleResponse(status: HttpStatus): void {
//     if (status === HttpStatus.OK) {
//       console.log("Request succeeded.");
//     } else if (status === HttpStatus.NotFound) {
//       console.log("Resource not found.");
//     } else {
//       console.log("An error occurred.");
//     }
//   }
  
//   handleResponse(HttpStatus.OK); // Request succeeded.
//   handleResponse(HttpStatus.NotFound); // Resource not found.
  
  
//   // ✅ Перечисления и автодополнение
//   // IDE (например, VS Code) подсказывает доступные значения перечисления.
//   const day: DaysOfWeek = DaysOfWeek.Friday;
//   console.log(day); // "FRI"

// ----------------------------------------------------------------------------



// // === Литеральные типы (Literal Types) в TypeScript ===

// // ✅ Пример 1: Строковые литеральные типы
// // Переменная может принимать только одно из указанных строковых значений
// let direction: "up" | "down" | "left" | "right";

// direction = "up"; // ОК
// direction = "down"; // ОК
// // direction = "forward"; // Ошибка: Type '"forward"' is not assignable to type '"up" | "down" | "left" | "right"'

// console.log(`Direction: ${direction}`); // Direction: down

// // ✅ Пример 2: Числовые литеральные типы
// // Переменная может принимать только одно из указанных числовых значений
// let statusCode: 200 | 400 | 404 | 500;

// statusCode = 200; // ОК
// statusCode = 404; // ОК
// // statusCode = 201; // Ошибка: Type '201' is not assignable to type '200 | 400 | 404 | 500'

// console.log(`Status Code: ${statusCode}`); // Status Code: 404

// // ✅ Пример 3: Булевые литеральные типы
// // Переменная может быть только true или false
// let isEnabled: true | false;

// isEnabled = true; // ОК
// isEnabled = false; // ОК
// // isEnabled = "true"; // Ошибка: Type '"true"' is not assignable to type 'true | false'

// console.log(`Is Enabled: ${isEnabled}`); // Is Enabled: false

// // ✅ Пример 4: Литеральные типы в функциях
// // Функция принимает только определенные значения в качестве аргументов
// function setAlignment(alignment: "left" | "center" | "right"): void {
//   console.log(`Alignment set to: ${alignment}`);
// }

// setAlignment("left"); // ОК
// setAlignment("center"); // ОК
// // setAlignment("top"); // Ошибка: Argument of type '"top"' is not assignable to parameter of type '"left" | "center" | "right"'

// // ✅ Пример 5: Литеральные типы с объединениями (Union Types)
// // Литеральные типы можно комбинировать с другими типами

// type ButtonSize = "small" | "medium" | "large";
// type ButtonColor = "primary" | "secondary" | "danger";

// type Button = {
//   size: ButtonSize;
//   color: ButtonColor;
// }

// const button: Button = {
//   size: "medium",
//   color: "primary",
// };

// console.log(`Button: size=${button.size}, color=${button.color}`); // Button: size=medium, color=primary







// ----------------------------------------------------------------------------


// // === Дженерики (Generics) в TypeScript ===

// // Дженерики (Generics) — это мощный инструмент TypeScript, 
// // который позволяет создавать обобщенные функции, классы и интерфейсы. 
// // Они позволяют работать с типами, которые задаются при вызове, 
// // обеспечивая гибкость и безопасность типов.



// // ✅ Пример 1: Обобщенная функция
// // Функция, которая возвращает переданное значение
// function identity<T>(value: T): T {
//     return value;
//   }
  
//   // Использование функции с разными типами
//   const numberValue = identity<number>(1); // Тип T = number
//   const stringValue = identity<string>("Hello"); // Тип T = string
//   const booleanValue = identity(true); // Тип T = boolean
  
//   console.log(numberValue); // 42
//   console.log(stringValue); // Hello
//   console.log(booleanValue); // true
  
//   // ✅ Пример 2: Обобщенные массивы
//   // Функция для работы с массивами
//   function getFirstElement<T>(array: T[]): T {
//     return array[0];
//   }
  
//   const numbers = [1, 2, 3];
//   const strings = ["Alice", "Bob", "Charlie"];
  
//   console.log(getFirstElement<number>(numbers)); // 1
//   console.log(getFirstElement<string>(strings)); // Alice
  
//   // ✅ Пример 3: Обобщенные интерфейсы
//   // Интерфейс с дженериком
//   type Box<T> = {
//     value: T;
//   }
  
//   const numberBox: Box<number> = { value: 42 };
//   const stringBox: Box<string> = { value: "Hello" };
// //   const someBox: Box = { value: "Hello" };  Generic type 'Box' requires 1 type argument(s)
  
//   console.log(numberBox.value); // 42
//   console.log(stringBox.value); // Hello
  
//   // ✅ Пример 6: Объединение дженериков
//   // Функция объединяет два объекта
//   function merge<T, U>(obj1: T, obj2: U): T & U {
//     return { ...obj1, ...obj2 };
//   }
  
//   const mergedObject = merge({ name: "Alice" }, { age: 25 });
//   console.log(mergedObject); // { name: "Alice", age: 25 }
  
//   // ✅ Пример 7: Обобщенные типы
//   // Тип с дженериком
//   type KeyValuePair<WWW, V> = {
//     key: WWW;
//     value: V;
//   };
  
//   const pair: KeyValuePair<string, number> = { key: "id", value: 42 };
//   console.log(pair); // { key: "id", value: 42 }
  
  





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





