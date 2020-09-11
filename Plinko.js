class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = 10
      World.add(world, this.body);
      this.ball_img = loadImage("sprites/ball.png");
      this.trajectory = [];
     
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius);
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);

for(var j = 40 ; j<=width; j=j+50)
{

 plinkos.push(new Plinko(j,75));

}

for (var j = 15; j <=width-10;j=j+50)
{
 
  plinkos.push(new Plinko(j,175));
  
}
    }
}