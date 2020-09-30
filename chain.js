class Chain{
    constructor(bodyA,bodyB){
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
            length:30,
            
        }
        this.body=Matter.Constraint.create(options);
        World.add(world,this.body);
    }
display(){
    var pA=this.body.bodyA.position;
    var pB=this.body.bodyB.position;
    push();
    strokeWeight(5);
    line(pA.x,pA.y,pB.x,pB.y);
pop();
}
}