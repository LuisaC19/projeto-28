class launcher {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display() {

        if (this.launcher.bodyA != null) {
            push()
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }

    }

    voar() {
        this.launcher.bodyA = null;
    }
}