class Polygon{
    constructor(x, y) {
        var options = {
            restitution:0.2,
            density:0.5,
            friction:0.4
        }
        polygon_img=loadImage("polygon.png");
        this.body = Bodies.circle(x, y, 50, options);
        this.r=50
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        ellipse(0,0,50,50);
        //imageMode(CENTER)
        //image(polygon_img, this.body.position.x,this.body.position.y,50,50)
        pop();
      }
}