// Пространство имен Geometry
namespace Geometry {
    // Класс для работы с кругами
    export class Circle {
      constructor(public radius: number) {}
  
      getArea(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
  
    // Класс для работы с прямоугольниками
    export class Rectangle {
      constructor(public width: number, public height: number) {}
  
      getArea(): number {
        return this.width * this.height;
      }
    }
  
    // Утилита для вычисления периметра
    export function getPerimeter(width: number, height: number): number {
      return 2 * (width + height);
    }
  }