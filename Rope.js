class Rope
{
    constructor(bodyA, bodyB, offsetX, offsetY)
    {
    
        var options = 
        {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: { x: this.offsetX, y: this.offsetY },
            stiffness: 0.5,
            length: 50
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
        display()
        {
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            var anchor1X = pointA.x;
            var anchor1Y = pointA.y;

            var anchor2X = pointB.x + this.offsetX;
            var anchor2Y = pointA.y + this.offsetY;

            strokeWeight(5);
            line(anchor1X, anchor1Y, anchor2X, anchor2Y);
        }
}