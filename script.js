function Image(url) {
  let image = document.createElement("img");
  image.src = url;
  image.style.position = "absolute";
  document.body.append(image);
  return image;
}
// function newInventory() {
//   let inventory = document.createElement("div");
//   inventory.style.width = "100%";
//   inventory.style.height = "100px";
//   inventory.style.display = "flex";
//   inventory.style.flexDirection = "row";
//   inventory.style.alignItems = "center";
//   inventory.style.justifyContent = "space-evenly";
//   inventory.style.border = "2px solid black";
//   inventory.style.backgroundColor = "brown";
//   document.body.append(inventory);
//   return inventory;
// }
// function move(element) {
//   element.style.position = "fixed";
//   const inventory = newInventory();
//   move(inventory).to(0, 0);
// }
// move(newImage("assets/ground1.png")).to(200, 450);

// import platform from "/assets/ground1.png";
// import grass from "/assets/grass2.png";
// import hills3 from "/assets/hills3.png";
// import hills4 from "/assets/hills4.png";
// import sky from "/assets/sky5.png";

const dirt = new Image();
dirt.src = "/assets/ground1.png";
dirt.width = 400;
dirt.height = 40;
// const grass = new Image();
// grass.src = "/assets/grass2.png";
// const hills3 = new Image();
// hills3.src = "/assets/hills3.png";
// const hills4 = new Image();
// hills4.src = "/assets/hills4.png";
// const sky = new Image();
// sky.src = "/assets/sky5.png";
// console.log(dirt);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
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
  constructor({ x, y }) {
    this.position = {
      x: x,
      y: y,
    };
    this.image = dirt;
    this.width = dirt.width;
    this.height = dirt.height;
  }

  draw() {
    ctx.fillStyle = "brown";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
//const platform = new Platform();
const platforms = [
  new Platform({ x: 100, y: 200, image: dirt }),
  new Platform({ x: 300, y: 400, image: `dirt` }),
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });

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
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
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
  if (scrollOffset > 2000) {
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
