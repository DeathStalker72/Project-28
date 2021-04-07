class Line{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
    }
}