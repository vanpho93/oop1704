class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    get length() {
        const dx = this.pointA.x - this.pointB.x;
        const dy = this.pointA.y - this.pointB.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Triangle {
    constructor(pointA, pointB, pointC) {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;
    }

    getPerimeter() {
        const l1 = new Line(this.pointA, this.pointB);
        const l2 = new Line(this.pointA, this.pointC);
        const l3 = new Line(this.pointC, this.pointB);
        return l1.length + l2.length + l3.length;
    }
}

const pA = new Point(1, 0);
const pB = new Point(0, 1);
const pC = new Point(0, 0);
const lineAC = new Line(pA, pC);
const tABC = new Triangle(pA, pB, pC);
// console.log(pB.getDistance());
console.log(lineAC.length);
console.log(tABC.getPerimeter());
