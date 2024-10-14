// 3. Liskov’s Substitution Principle


// bad code 

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(size) {
    // The Square class incorrectly uses the Rectangle constructor
    super(size, size);
  }
  // Violates LSP by changing the behavior of `setWidth` and `setHeight` methods
  setWidth(width) {
    this.width = width;
    this.height = width; // Forces the height to be the same as width
  }
  setHeight(height) {
    this.width = height; // Forces the width to be the same as height
    this.height = height;
  }
}

function drawShape(shape) {
  const area = shape.calculateArea();
  // Draw the shape based on its area
}

const mySquare = new Square(5);

mySquare.setWidth(4); // Unexpectedly alters both width and height

drawShape(mySquare); // Now this function is confused, as the behavior of the square changes unpredictably



