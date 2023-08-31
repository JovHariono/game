const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.width * ASPECT_RATIO.width;
canvas.height = DISPLAY_PIXEL.height * ASPECT_RATIO.height;

const playerProperty = {
  width: 50,
  height: 50,
  speed: 1,
  color: "tomato",
  position: {
    x: 0,
    y: canvas.height / 2,
  },
};

const enemyProperty = {
  width: 50,
  height: 50,
  speed: 1,
  color: "black",
  position: {
    x: canvas.width - 50,
    y: canvas.height / 2,
  },
};

const ground = new Ground(canvas.width, canvas.height, "lightblue");
const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);

const animate = () => {
  ground.create();
  player.create();
  enemy.create();

  player.update();
  enemy.update();

  window.requestAnimationFrame(animate);
};

window.addEventListener("keydown", function(callback){
    player.movement(callback.key)
})

animate();
