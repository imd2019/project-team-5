// import Button from "./button.js";
import Startbutton from "./startbutton.js";
import Satisfaction from "./satisfaction.js";
import Phonebutton from "./phonebutton.js";
import Tvbutton from "./tvbutton.js";
import Windowbutton from "./windowbutton.js";
import Magazinebutton from "./magazinebutton.js";

// let start = new Button(x, y, width, height);

// let tv = new Button(x, y, width, height);
// let window = new Button(x, y, width, height);
// let magazine = new Button(x, y, width, height);
// let nurse = new Button(x, y, width, height);
// let news = new Button(x, y, width, height);
// let thoughts = new Button(x, y, width, height);
let startButton = new Startbutton(824, 496, 339, 72);
let skala1 = new Satisfaction(539.5, 44.5, 266.5, 24);
let phoneButton = new Phonebutton(394, 510, 42, 35);
let tvButton = new Tvbutton(48, 400, 80, 93);
let windowButton = new Windowbutton(1141, 208, 1141, 381, 1320, 443, 1320, 162);
let magazineButton = new Magazinebutton(885, 469, 136, 40);
let time = 0;
let showStartScreen = true;
// let showScreen1 = false;

let startScreen = loadImage("Start_Screen1.png");
let screen1 = loadImage("Screen1.png");
let satisfactionBanner = loadImage("Skala_1.png");
let phoneHover = loadImage("TelefonHover1.png");
let tvHover = loadImage("Screen1_Fernseher.png");
let magazineHover = loadImage("Screen1_Schublade.png");
let windowHover = loadImage("Screen1_Fenster.png");
let animation = loadImage("telefonieren-animation.svg");

function mouseClicked() {
  if (startButton.mouseClicked()) {
    startButton.showScreen1 = true;
  }

  phoneButton.mouseClicked();
  show();
}
window.mouseClicked = mouseClicked;

function show() {
  if (showStartScreen === true) {
    image(startScreen, 0, 0);
    startButton.display();
  }
  if (startButton.hitTest(mouseX, mouseY)) {
    console.log("yeah!"); //Hovereffekt
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
  // phoneButton.display();
  // tvButton.display();
  // magazineButton.display();
  // windowButton.display();
  // image(screen1, 0, 0);

  // if (mouseX > 394 && mouseY > 510 && mouseX < 432 && mouseY < 545) {
  //   image(phoneHover, 0, 0);
  // }
  // if (mouseX > 48 && mouseY > 400 && mouseX < 128 && mouseY < 493) {
  //   image(tvHover, 0, 0);
  // }
  // if (mouseX > 1141 && mouseY > 208 && mouseX < 1320 && mouseY < 381) {
  //   image(windowHover, 0, 0);
  // }
  // if (mouseX > 885 && mouseY > 469 && mouseX < 1021 && mouseY < 509) {
  //   image(magazineHover, 0, 0);
  // }
  // image(animation, 0, 0);
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
