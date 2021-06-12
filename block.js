class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("block.png");
        this.Visiblity=255;
      }
      display(){
        
        push();
        if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        image(this.image, this.width, this.height);
        }
        else{
          this.Visiblity=this.Visiblity-5;
          tint(255,this.Visiblity);
          image(this.image,this.body.position.x,this.body.position.y);
          World.remove(world,this.body);
        }
        
        pop();
      }
}
