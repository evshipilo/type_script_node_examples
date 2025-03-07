// 📌 Поименованный экспорт (named export)
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;

// 📌 Экспорт по умолчанию (default export)
const multiply = (a: number, b: number): number => a * b;
export default multiply;