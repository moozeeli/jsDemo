class Point{
  constructor(x,y){
    this.y = y;
    this.x = x;
  }
  toString(){
    return `(${this.x},${this.y})`;
  }
  log(){
    let str  = this.toString();
    console.log(str);
  }
}

let p = new Point(1,2);
p.log();

class P2 extends Point {
  constructor(x,y,z){
    super(x,y);
    this.z = z;
  }
  toString(){
    return this.z +" : "+super.toString();
  }
}


let p2 = new P2(4,2,"p2");
p2.log();

