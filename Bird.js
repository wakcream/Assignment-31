class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.trajectory = [];
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if (this.body.velocity.x > 5 && this.body.position.x > 275) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeimage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}

//3 element 0 1 2 index