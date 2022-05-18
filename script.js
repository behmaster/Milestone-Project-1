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

// const dirt1Src = "./assets/dirt1.png";
// const dirt1 = new newImage(dirt1Src);
// dirt1.width = 0;
// dirt1.height = 0;

// const grass1Src = "/assets/grass1.png";
// const grass1 = new newImage(grass1Src);
// grass1.width = 0;
// grass1.height = 0;

// const hill1Src = "/assets/hills1-1.png";
// const hill1 = new newImage(hill1Src);
// hill1.width = 0;
// hill1.height = 0;

// // const hills4 = new newImage();
// // hills4.src = "/assets/hills4.png";
// const sky1Src = "/assets/sky1.png";
// const sky1 = new newImage(sky1Src);
// sky1.width = 0;
// sky1.height = 0;
// // console.log(dirt);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// canvas.width = 1060;
canvas.height = 600;

const gravity = 1.5;

class Player {
  constructor() {
    this.position = {
      x: window.innerWidth * 0.5,
      y: 400,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
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

const player = new Player();
//const platform = new Platform();
const platforms = [
  new Platform({ image: dirt1, x: 0, y: 520, width: 800, height: 80 }),
  new Platform({ image: dirt2, x: 799, y: 520, width: 800, height: 80 }),
  new Platform({ image: dirt3, x: 1598, y: 520, width: 800, height: 80 }),
];

const skyBackground = [
  new Background({ image: sky2, x: 0, y: 0, width: 1200, height: 600 }),
  new Background({ image: sky3, x: 1198, y: 0, width: 1200, height: 600 }),
];
const hill3Background = [
  new Background({ image: hills31, x: 0, y: 180, width: 1200, height: 400 }),
  new Background({ image: hills32, x: 1199, y: 180, width: 1200, height: 400 }),
  new Background({ image: hills33, x: 2398, y: 180, width: 1200, height: 400 }),
];
const hill2Background = [
  new Background({ image: hills21, x: 0, y: 220, width: 1200, height: 400 }),
  new Background({ image: hills22, x: 1199, y: 220, width: 1200, height: 400 }),
  new Background({ image: hills23, x: 2398, y: 205, width: 1200, height: 400 }),
];
const hill1Background = [
  new Background({ image: hills11, x: 0, y: 240, width: 1200, height: 400 }),
  new Background({ image: hills12, x: 1199, y: 276, width: 1200, height: 400 }),
  new Background({ image: hills13, x: 2398, y: 286, width: 1200, height: 400 }),
];
const grassBackground = [
  new Background({ image: grass1, x: 0, y: 200, width: 900, height: 400 }),
  new Background({ image: grass2, x: 898, y: 466, width: 900, height: 150 }),
  new Background({ image: grass3, x: 1797, y: 307, width: 900, height: 300 }),
  new Background({ image: grass2, x: 2697, y: 462, width: 900, height: 200 }),
  new Background({ image: grass1, x: 3596, y: 230, width: 900, height: 400 }),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

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
    player.velocity.x = 5;
  } else if (
    keys.left.pressed == true &&
    player.position.x >= window.innerWidth * (1 / 3)
  ) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      skyBackground.forEach((sky) => {
        sky.position.x -= 1;
      });
      hill3Background.forEach((hill) => {
        hill.position.x -= 2;
      });
      hill2Background.forEach((hill) => {
        hill.position.x -= 2.5;
      });
      hill1Background.forEach((hill) => {
        hill.position.x -= 3;
      });
      grassBackground.forEach((grass) => {
        grass.position.x -= 4.3;
      });
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      skyBackground.forEach((sky) => {
        sky.position.x += 1;
      });
      hill3Background.forEach((hill) => {
        hill.position.x += 2;
      });
      hill2Background.forEach((hill) => {
        hill.position.x += 2.5;
      });
      hill1Background.forEach((hill) => {
        hill.position.x += 3;
      });
      grassBackground.forEach((grass) => {
        grass.position.x += 4.3;
      });
      platforms.forEach((platform) => {
        platform.position.x += 5;
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
  if (scrollOffset > 5000) {
    console.log("You Win!");
  }
}

animate();

document.addEventListener("keydown", ({ keyCode }) => {
  console.log(event);
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 37:
      console.log("left");
      keys.left.pressed = true;
      break;

    case 83:
      console.log("down");
      break;
    case 40:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;
    case 39:
      console.log("right");
      keys.right.pressed = true;
      break;

    case 87:
      console.log("up");
      player.velocity.y -= 30;
      break;
    case 38:
      console.log("up");
      player.velocity.y -= 30;
      break;
  }
});

document.addEventListener("keyup", ({ keyCode }) => {
  //   console.log(event);
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 37:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 83:
      console.log("down");
      player.velocity.y = 0;
      break;
    case 40:
      console.log("down");
      player.velocity.y = 0;
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;
    case 39:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
      console.log("up");
      player.velocity.y = 0;
      break;
    case 38:
      console.log("up");
      player.velocity.y = 0;
      break;
  }
});
