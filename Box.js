class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height,color);
    //this.image = loadImage("wood1.png");
    this.color=color;
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    push();
    //noStroke();
    stroke("black");
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);
  pop();
  }
};
