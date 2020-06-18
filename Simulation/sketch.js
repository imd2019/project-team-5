import Button from "./button.js";
import Satisfaction from "./satisfaction.js";

// let start = new Button(x, y, width, height);
// let phone = new Button(x, y, width, height);
// let tv = new Button(x, y, width, height);
// let window = new Button(x, y, width, height);
// let magazine = new Button(x, y, width, height);
// let nurse = new Button(x, y, width, height);
// let news = new Button(x, y, width, height);
// let thoughts = new Button(x, y, width, height);
let skala1 = new Satisfaction(639, 44.5, 268, 25);
let time = 0;

// let satisfactionBanner1 = loadImage("Skala_1.png");
let screen1 = loadImage("Screen1.png");

// function mouseClicked() {}
function draw() {
  clear();
  time = time + 1;
  // image(satisfactionBanner1, -300, 0);
  image(screen1, 0, 0);

  //Zufriedenheitsskala
  skala1.display();

  stroke("black");
  strokeWeight(1);
  // fill("#8f8c89");
  line(150, 44, 150, 69);
  noStroke();
  if (time % 30 === 0) {
    /* % = modulo; wenn zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
    skala1.decrease();
  }
}
window.draw = draw;
