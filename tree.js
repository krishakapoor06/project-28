class Tree {
  constructor(x, y, width, height) {
    //this.image = loadImage("images/tree.png");
    var options = {
        'restitution':0.8,
        isStatic : true
        
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    push ();
  
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};