class Player {
  constructor() {
    this.size = 100;
    this.y = height - this.size;
    this.x = 50;
    this.velocityY = 0;
    this.gravity = 2;
    this.option = random(1);
  }
  show() {
    image(playerImg, this.x, this.y, this.size, this.size);
  }

  jump() {
    if (this.y === height - this.size) {
      this.velocityY = -30;
    }
  }

  move() {
    this.y += this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 40,
      this.size - 6,

      currentObs.x,
      currentObs.y,
      currentObs.size - 50,
      currentObs.size - 10
    );
    return isColliding;
  }
}
