class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(pointObjOne,pointObjTwo){
       const xD = pointObjOne.x - pointObjTwo.x;
       const yD = pointObjOne.y - pointObjTwo.y;
       return Math.sqrt(xD ** 2 + yD ** 2);
    }

    area(a,b){
       console.log(a + b);
    }

}

let p1 = new Point(5, 5);
const area1 = p1.area(10,10)
let p2 = new Point(9, 8);
const area2 = p2.area(20,20)

console.log(Point.distance(p1, p2));