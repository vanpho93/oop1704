class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

const pA = new Point(1, 1);
const pB = new Point(0, 100);
console.log(pB.getDistance());
