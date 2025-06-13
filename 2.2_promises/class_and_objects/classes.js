class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {
        console.log(`Painting the rectangle with color: ${this.color}`);
    }
}

const rect = new Rectangle(10, 5, 'blue');
console.log(`Area of rectangle: ${rect.area()}`);
rect.paint();



// ------------------------------------------------------------------------------
// Writing this with traditional object method

// const rect1 = {
//     width: 2,
//     height: 3,
//     color: 'red',
// }

// function area(rect) {
//     return rect.width * rect.height;
// }

// const ans = area(rect1);
// console.log(`Area of rectangle: ${ans}`);

// 26