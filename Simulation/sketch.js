// import Button from "./button.js";
import Startbutton from "./startbutton.js";
import Nextbutton from "./nextbutton.js";
import Satisfaction from "./satisfaction.js";
import Phonebutton from "./phonebutton.js";
import Tvbutton from "./tvbutton.js";
import Windowbutton from "./windowbutton.js";
import Magazinebutton from "./magazinebutton.js";
import Newsbutton from "./newsbutton.js";

// let nurse = new Button(x, y, width, height);
// let thoughts = new Button(x, y, width, height);
let startButton = new Startbutton(824, 496, 339, 72);
let nextButton = new Nextbutton(992, 637, 292, 58);
let skala1 = new Satisfaction(539.5, 44.5, 266.5, 24);
let phoneButton = new Phonebutton(394, 510, 42, 35);
let tvButton = new Tvbutton(48, 400, 80, 93);
let windowButton = new Windowbutton(1141, 208, 179, 173);
let magazineButton = new Magazinebutton(885, 469, 136, 40);
let newsButton = new Newsbutton(1189, 22, 131, 49);
// let optionCall = new Button(418, 485, 36, 20);
// let optionVisit = new Button(377, 485, 36, 20);
let time = 0;
let showStartScreen = true;

let startScreen = loadImage("Start-Screen.png");
let screen1 = loadImage("Screen1.png");
let satisfactionBanner = loadImage("Skala1-2.png");
let startHover = loadImage("Start-Screen-Hover.png");
let nextHover = loadImage("Weiter-hover.png");
let news = loadImage("News(Screen1-2-3).png");
let phoneHover = loadImage("Screen1-Telefon.png");
let tvHover = loadImage("Screen1-Fernseher.png");
let magazineHover = loadImage("Screen1-Schublade.png");
let windowHover = loadImage("Screen1-Fenster.png");
let newsHover = loadImage("News-Hover(Screen1-2).png");
let intro = loadImage("Einleitung.png");
let watchTv = loadImage("Screen1-Tv-schauen.png");
let watchWindow = loadImage("Screen1-Fenster-schauen.png");
let phoneOptions = loadImage("Screen1-Telefon2.png");
let callHover = loadImage("Screen1-Telefon4.png");
let visitHover = loadImage("Screen1-Telefon3.png");
let call = loadImage("Screen1-telefoniert.png");
let visit = loadImage("Screen1-Familie.png");
// let endHover = loadImage("Auflösung-Hover.png");

function mouseClicked() {
  startButton.mouseClicked();
  phoneButton.mouseClicked();
  // phoneButton.optionCall.mouseClicked();
  // phoneButton.optionVisit.mouseClicked();
  nextButton.mouseClicked();
  tvButton.mouseClicked();
  magazineButton.mouseClicked();
  windowButton.mouseClicked();
  show();
}
window.mouseClicked = mouseClicked;

function show() {
  if (showStartScreen === true) {
    image(startScreen, 0, 0);
    startButton.display(startHover);
  }
  if (startButton.showIntro === true) {
    image(intro, 0, 0);
    nextButton.display(nextHover);
  }

  if (nextButton.showScreen1 === true) {
    image(screen1, 0, 0);
    newsButton.display(news, newsHover);
    phoneButton.display(
      phoneHover,
      phoneOptions,
      callHover,
      visitHover,
      call,
      visit
    );
    tvButton.display(tvHover, watchTv);
    magazineButton.display(magazineHover);
    windowButton.display(windowHover, watchWindow);

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
  if (startButton.showIntro === false) {
    if (startButton.hitTest(mouseX, mouseY)) {
      // console.log("yeah!"); //Hovereffekt
      if (startButton.showIntro === true) {
        showStartScreen = false;
      }
    }
  }
  if (nextButton.showScreen1 === false) {
    if (nextButton.hitTest(mouseX, mouseY)) {
      // console.log("yeah!"); //Hovereffekt
      if (nextButton.showScreen1 === true) {
        startButton.showIntro = false;
      }
    }
  }
}

function draw() {
  clear();
  time = time + 1;
  show();

  // image(endHover, 0, 0);
  // image(intro, 0, 0);
  // nextButton.display(nextHover);

  //Screen1
  // image(screen1, 0, 0);
  // image(phoneOptions, 0, 0);
  // tvButton.display(tvHover, watchTv);
  // magazineButton.display(magazineHover);
  // windowButton.display(windowHover);
  // newsButton.display(news, newsHover);

  //Zufriedenheitsskala
  // image(satisfactionBanner, 0, 0);
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

// if (startButton.showScreen1 === false) {
//   if (startButton.hitTest(mouseX, mouseY)) {
//     console.log("yeah!"); //Hovereffekt
//     if (startButton.showScreen1 === true) {
//       showStartScreen = false;
//     }
//   }
// }
