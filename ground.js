class Ground {
    constructor(x, y, width, height) {

        var options = {
            isStatic:true
        }

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);

    }

    display() {

        push();
        fill(200);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();

    }
}