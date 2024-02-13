class Point{
    constructor(
    public x: number, 
    public y: number){}
}

class Triangle{
    constructor(
    public a: Point = new Point(0,0),
    public b: Point = new Point(0,0), 
    public c: Point = new Point(0,0)){}

    setCoordinates(x1: number, y1: number, x2: number, y2: number, x3:number, y3: number){
        this.a = new Point(x1, y1);
        this.b = new Point(x2, y2);
        this.c = new Point(x3, y3);
    }
}

const triangle1 = new Triangle();
const triangle2 = new Triangle();

triangle1.setCoordinates(1,2,3,4,5,6);
triangle2.setCoordinates(7,8,9,10,11,12);

console.log('Triangle 1 coordinates:');
console.log('A:', triangle1.a.x, triangle1.a.y)
console.log("B:", triangle1.b.x, triangle1.b.y);
console.log("C:", triangle1.c.x, triangle1.c.y);

console.log("Triangle 2 coordinates:");
console.log("A:", triangle2.a.x, triangle2.a.y);
console.log("B:", triangle2.b.x, triangle2.b.y);
console.log("C:", triangle2.c.x, triangle2.c.y);