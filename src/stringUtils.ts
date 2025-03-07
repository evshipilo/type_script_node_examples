// 📌 Поименованный экспорт (named export)
export const toUpperCase = (str: string): string => str.toUpperCase();
export const toLowerCase = (str: string): string => str.toLowerCase();

// 📌 Экспорт по умолчанию (default export)
const reverseString = (str: string): string => str.split("").reverse().join("");
export default reverseString;