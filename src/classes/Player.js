class Player {
  constructor(props) {
    this.width = props.width;
    this.height = props.height;
    this.speed = props.speed;
    this.color = props.color;
    this.position = {
      x: props.position.x,
      y: props.position.y,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.jumpHeight = 100;
    this.gravity = 0.5;
  }

  jump() {
    return (this.velocity.y = -Math.sqrt(2 * this.gravity * this.jumpHeight));
  }

  moveRight() {
    this.velocity.x = 1 * this.speed;
  }

  moveLeft() {
    this.velocity.x = -1 * this.speed;
  }

  //kinematic equation physic
  //heightJump = vi ^ 2 / (2 *gravitasi)
  //vi = sqrt(2 * g * h)

  update() {
    const ground = canvas.height - this.height;
    const rightWall = canvas.width - this.width

    this.velocity.y += this.gravity;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (player.position.y > ground) {
      this.position.y = ground;
    //   this.velocity.y = -Math.sqrt(2 * this.gravity * this.jumpHeight);
    }
    if(player.position.x > rightWall) {
        this.velocity.x *= -1
    }
    if(player.position.x < 0) {
        this.velocity.x *= -1
    }
  }

  create() {
    board.fillStyle = this.color;
    board.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
