function newImage(url, width, height) {
  let image = document.createElement("img");
  image.src = url;
  image.width = width;
  image.height = height;
  image.style.position = "absolute";
  document.body.append(image);
  return image;
}

const dirt1 = newImage("./assets/dirt1.png", 0, 0);
const dirt2 = newImage("./assets/dirt2.png", 0, 0);
const dirt3 = newImage("./assets/dirt3.png", 0, 0);
const grass1 = newImage("./assets/grass1.png", 0, 0);
const grass2 = newImage("./assets/grass2.png", 0, 0);
const grass3 = newImage("./assets/grass3.png", 0, 0);
const hills11 = newImage("./assets/hills1-1.png", 0, 0);
const hills12 = newImage("./assets/hills1-2.png", 0, 0);
const hills13 = newImage("./assets/hills1-3.png", 0, 0);
const hills21 = newImage("./assets/hills2-1.png", 0, 0);
const hills22 = newImage("./assets/hills2-2.png", 0, 0);
const hills23 = newImage("./assets/hills2-3.png", 0, 0);
const hills31 = newImage("./assets/hills3-1.png", 0, 0);
const hills32 = newImage("./assets/hills3-2.png", 0, 0);
const hills33 = newImage("./assets/hills3-3.png", 0, 0);
const sky1 = newImage("./assets/sky1.png", 0, 0);
const sky2 = newImage("./assets/sky2.png", 0, 0);
const sky3 = newImage("./assets/sky3.png", 0, 0);

const idleRight = newImage("./assets/IdleRight.png", 0, 0);
const idleLeft = newImage("./assets/IdleLeft.png", 0, 0);
const runRight = newImage("./assets/RunRight.png", 0, 0);
const runLeft = newImage("./assets/RunLeft.png", 0, 0);

const youWin = newImage("./assets/youwin.jpg", 0, 0);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 600;

const gravity = 1.5;

class Player {
  constructor() {
    this.speed = 6;
    this.position = {
      x: window.innerWidth * 0.25,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 120;
    this.height = 120;
    this.image = idleRight;
    this.frames = 0;
    this.sprites = {
      idle: {
        right: idleRight,
        left: idleLeft,
        cropWidth: 510,
      },
      run: {
        right: runRight,
        left: runLeft,
      },
    };
    this.currentSprite = this.sprites.idle.right;
    this.currentCropWidth = 510;
  }

  draw() {
    ctx.drawImage(
      this.currentSprite,
      this.currentCropWidth * this.frames,
      0,
      340,
      400,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.frames++;
    //console.log(this.frames);
    if (
      this.frames >= 16 &&
      (this.currentSprite === this.sprites.idle.right ||
        this.currentSprite === this.sprites.idle.left)
    )
      this.frames = 0;
    else if (
      this.frames >= 13 &&
      (this.currentSprite === this.sprites.run.right ||
        this.currentSprite === this.sprites.run.left)
    )
      this.frames = 0;
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (
      this.position.y + this.height + this.velocity.y <=
      canvas.height + player.height
    ) {
      this.velocity.y += gravity;
    }
    // else {this.velocity.y = 0;  }
  }
}
class Platform {
  constructor({ image, x, y, width, height }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = width;
    this.height = height;
  }

  draw() {
    // ctx.fillStyle = "brown";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
class Background {
  constructor({ image, x, y, width, height, scrollSpeed }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = image;
    this.width = width;
    this.height = height;
  }

  draw() {
    // ctx.fillStyle = "brown";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

let player = new Player();
// console.log(player.sprites.run.right);
let platforms = [];

let skyBackground = [];
let hill3Background = [];
let hill2Background = [];
let hill1Background = [];
let grassBackground = [];
let youWinPhoto;
let scrollOffset = 0;

function start() {
  player = new Player();

  platforms = [
    new Platform({ image: dirt1, x: 0, y: 520, width: 800, height: 80 }),
    new Platform({ image: dirt2, x: 799, y: 520, width: 800, height: 80 }),
    new Platform({ image: dirt3, x: 1950, y: 520, width: 800, height: 80 }),
    new Platform({ image: dirt3, x: 1670, y: 400, width: 200, height: 20 }),
    new Platform({ image: dirt3, x: 2670, y: 400, width: 200, height: 20 }),
    new Platform({ image: dirt3, x: 2870, y: 270, width: 200, height: 20 }),
    new Platform({ image: dirt3, x: 3200, y: 270, width: 40, height: 20 }),
    new Platform({ image: dirt3, x: 3400, y: 270, width: 40, height: 20 }),
    new Platform({ image: dirt3, x: 3500, y: 400, width: 100, height: 20 }),
    new Platform({ image: dirt3, x: 3600, y: 520, width: 800, height: 80 }),
    new Platform({ image: dirt3, x: 4400 - 2, y: 520, width: 800, height: 80 }),
    new Platform({ image: dirt3, x: 5400, y: 520, width: 40, height: 20 }),
    new Platform({ image: dirt3, x: 5400, y: 400, width: 40, height: 20 }),
    new Platform({ image: dirt3, x: 5550, y: 270, width: 400, height: 20 }),
    new Platform({ image: dirt3, x: 6100, y: 150, width: 400, height: 20 }),
    new Platform({ image: dirt3, x: 6700, y: 520, width: 800, height: 80 }),
    new Platform({ image: dirt3, x: 7500 - 2, y: 520, width: 800, height: 80 }),
  ];

  skyBackground = [
    new Background({ image: sky1, x: 0, y: 0, width: 1200, height: 600 }),
    new Background({ image: sky2, x: 1198, y: 0, width: 1200, height: 600 }),
    new Background({ image: sky3, x: 2396, y: 0, width: 1200, height: 600 }),
  ];
  hill3Background = [
    new Background({ image: hills31, x: 0, y: 180, width: 1200, height: 400 }),
    new Background({
      image: hills32,
      x: 1199,
      y: 180,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills33,
      x: 2398,
      y: 180,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills31,
      x: 3597,
      y: 180,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills32,
      x: 4796,
      y: 180,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills33,
      x: 5995,
      y: 180,
      width: 1200,
      height: 400,
    }),
  ];
  hill2Background = [
    new Background({ image: hills21, x: 0, y: 220, width: 1200, height: 400 }),
    new Background({
      image: hills22,
      x: 1199,
      y: 220,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills23,
      x: 2398,
      y: 205,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills21,
      x: 3597,
      y: 220,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills22,
      x: 4796,
      y: 220,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills23,
      x: 5995,
      y: 205,
      width: 1200,
      height: 400,
    }),
  ];
  hill1Background = [
    new Background({ image: hills11, x: 0, y: 240, width: 1200, height: 400 }),
    new Background({
      image: hills12,
      x: 1199,
      y: 276,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills13,
      x: 2398,
      y: 286,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills11,
      x: 3597,
      y: 240,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills12,
      x: 4797,
      y: 276,
      width: 1200,
      height: 400,
    }),
    new Background({
      image: hills13,
      x: 5996,
      y: 286,
      width: 1200,
      height: 400,
    }),
  ];
  grassBackground = [
    new Background({ image: grass1, x: 0, y: 200, width: 900, height: 400 }),
    new Background({ image: grass2, x: 898, y: 466, width: 900, height: 150 }),
    new Background({ image: grass3, x: 1797, y: 307, width: 900, height: 300 }),
    new Background({ image: grass1, x: 2696, y: 200, width: 900, height: 400 }),
    new Background({ image: grass2, x: 3595, y: 466, width: 900, height: 150 }),
    new Background({ image: grass3, x: 4494, y: 307, width: 900, height: 300 }),
    new Background({ image: grass1, x: 5393, y: 200, width: 900, height: 400 }),
    new Background({ image: grass2, x: 6292, y: 466, width: 900, height: 150 }),
    new Background({ image: grass3, x: 7190, y: 307, width: 900, height: 300 }),
  ];
  youWinPhoto = new Background({
    image: youWin,
    x: 150,
    y: 50,
    width: 852,
    height: 480,
  });
  scrollOffset = 0;
}
let lastKey;
const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  skyBackground.forEach((sky) => {
    sky.draw();
  });
  hill3Background.forEach((hill) => {
    hill.draw();
  });
  hill2Background.forEach((hill) => {
    hill.draw();
  });
  hill1Background.forEach((hill) => {
    hill.draw();
  });
  grassBackground.forEach((grass) => {
    grass.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });

  //   console.log(player.position.x + scrollOffset);
  player.update();
  if (
    keys.right.pressed == true &&
    player.position.x < window.innerWidth * (2 / 3)
  ) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed == true &&
      player.position.x >= window.innerWidth * (1 / 3)) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      skyBackground.forEach((sky) => {
        sky.position.x -= player.speed * 0.2;
      });
      hill3Background.forEach((hill) => {
        hill.position.x -= player.speed * 0.4;
      });
      hill2Background.forEach((hill) => {
        hill.position.x -= player.speed * 0.5;
      });
      hill1Background.forEach((hill) => {
        hill.position.x -= player.speed * 0.6;
      });
      grassBackground.forEach((grass) => {
        grass.position.x -= player.speed * 0.7;
      });
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      skyBackground.forEach((sky) => {
        sky.position.x += player.speed * 0.2;
      });
      hill3Background.forEach((hill) => {
        hill.position.x += player.speed * 0.4;
      });
      hill2Background.forEach((hill) => {
        hill.position.x += player.speed * 0.5;
      });
      hill1Background.forEach((hill) => {
        hill.position.x += player.speed * 0.6;
      });
      grassBackground.forEach((grass) => {
        grass.position.x += player.speed * 0.7;
      });
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });
    }
  }
  //this is the platform collision detection code
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  if (player.position.y < 0) {
    player.velocity.y = 10;
  }

  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.left;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.idle.left
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.idle.left;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.idle.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.idle.right;
  }

  //win condition
  if (scrollOffset + canvas.width > 8300) {
    console.log("You Win!");

    youWinPhoto.draw();
    // ctx.font = "48px serif"
    // ctx.fillText("You Win!", 8300, 200, 400 )
  }
  //lose condition
  if (player.position.y > canvas.height) {
    console.log("you lose");
    start();
  }
}
start();
animate();

document.addEventListener("keydown", ({ keyCode }) => {
  //   console.log(event);
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      lastKey = "left";
      break;
    case 37:
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 83:
      //   console.log("down");
      break;
    case 40:
      //   console.log("down");
      break;

    case 68:
      keys.right.pressed = true;
      lastKey = "right";
      break;
    case 39:
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 87:
      player.velocity.y -= 20;
      break;
    case 38:
      player.velocity.y -= 20;
      break;
  }
});

document.addEventListener("keyup", ({ keyCode }) => {
  //   console.log(event);
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;
    case 37:
      keys.left.pressed = false;
      break;

    case 83:
      player.velocity.y = 0;
      break;
    case 40:
      player.velocity.y = 0;
      break;

    case 68:
      keys.right.pressed = false;
      break;
    case 39:
      keys.right.pressed = false;
      break;

    case 87:
      player.velocity.y = 0;
      break;
    case 38:
      player.velocity.y = 0;
      break;
  }
});
