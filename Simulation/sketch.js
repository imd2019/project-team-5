// import Button from "./button.js";
import Startbutton from "./startbutton.js";
import Phonebutton from "./phonebutton.js";
import Satisfaction from "./satisfaction.js";

// let start = new Button(x, y, width, height);

// let tv = new Button(x, y, width, height);
// let window = new Button(x, y, width, height);
// let magazine = new Button(x, y, width, height);
// let nurse = new Button(x, y, width, height);
// let news = new Button(x, y, width, height);
// let thoughts = new Button(x, y, width, height);
let startButton = new Startbutton(0, 0, 0, 0);
let phonebutton = new Phonebutton(0, 0, 0, 0);
let skala1 = new Satisfaction(539.5, 44.5, 266.5, 24);
let time = 0;
let showStartScreen = true;
// let showScreen1 = false;

let startScreen = loadImage("Start_Screen1.png");
let screen1 = loadImage("Screen1.png");
let satisfactionBanner = loadImage("Skala_1.png");
// let phoneHover = loadImage("TelefonHover1.png");

function mouseClicked() {
  startButton.mouseClicked();
  phonebutton.mouseClicked();
  show();
}
window.mouseClicked = mouseClicked;

function show() {
  if (showStartScreen === true) {
    image(startScreen, 0, 0);
    startButton.display();
  }
  if (startButton.hitTest(mouseX, mouseY)) {
    console.log("yeah!");
    if (startButton.showScreen1 === true) {
      showStartScreen = false;
      image(screen1, 0, 0);
      //Zufriedenheitsskala
      image(satisfactionBanner, 0, 0);
      skala1.display();
      stroke("#8f8c89");
      strokeWeight(1);
      line(741, 46, 741, 68);
      line(673, 46, 673, 68);
      line(604, 46, 604, 68);
      noStroke();
      if (time % 30 === 0) {
        /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
        skala1.decrease();
      }
    }
  }
}

function draw() {
  clear();
  time = time + 1;
  show();
  // phonebutton.display();

  // image(screen1, 0, 0);

  // if (mouseX > 394 && mouseY > 510 && mouseX < 432 && mouseY < 545) {
  //   image(phoneHover, 0, 0);
  // }
  // image(satisfactionBanner, 0, 0);

  // //Zufriedenheitsskala
  // skala1.display();

  // stroke("#8f8c89");
  // // stroke("black");
  // strokeWeight(1);
  // line(741, 46, 741, 68);
  // line(673, 46, 673, 68);
  // line(604, 46, 604, 68);
  // noStroke();
  // if (time % 30 === 0) {
  //   /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
  //   kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
  //     skala1.decrease();
  // }
}
window.draw = draw;
