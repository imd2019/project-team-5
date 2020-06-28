// import Button from "./button.js";
import Startbutton from "./startbutton.js";
import Nextbutton from "./nextbutton.js";
import Satisfaction from "./satisfaction.js";
import Phonebutton from "./phonebutton.js";
import Tvbutton from "./tvbutton.js";
import Windowbutton from "./windowbutton.js";
import Magazinebutton from "./magazinebutton.js";
import Newsbutton from "./newsbutton.js";
import Nursebutton from "./nursebutton.js";

// let nurse = new Button(x, y, width, height);
// let thoughts = new Button(x, y, width, height);
let startButton = new Startbutton(824, 496, 339, 72);
let nextButton = new Nextbutton(992, 637, 292, 58);
let skala = new Satisfaction(539.5, 44.5, 266.5, 24);
let phoneButton = new Phonebutton(394, 510, 42, 35);
// let phoneButton2 = new Phonebutton(382, 400, 42, 35);
let tvButton = new Tvbutton(48, 400, 80, 93);
let windowButton = new Windowbutton(1141, 208, 179, 173);
let magazineButton = new Magazinebutton(885, 469, 136, 40);
let newsButton = new Newsbutton(1189, 22, 131, 49);
let nurseButton = new Nursebutton(285, 287, 85, 367);

let time = 0;
let showStartScreen = true;

let startScreen;
let screen1;
let satisfactionBanner1;
let satisfactionBanner2;
let startHover;
let nextHover;
let news;
let phoneHover;
let tvHover;
let magazineHover;
let windowHover;
let newsHover;
let intro;
let watchTv;
let watchWindow;
let watchWindow2;
let phoneOptions;
let callHover;
let visitHover;
let call;
let visit;
let magazineOptions;
let readHover;
let quizHover;
let read;
let quiz;
let screen2;
let message1;
let screen3;
let screen4;
let resolution4;
let phase1;
let nurse;
let nurseHover;
let talk;

function preload() {
  startScreen = loadImage("./Bilder/Start-Screen.png");
  screen1 = loadImage("./Bilder/Screen1.png");
  satisfactionBanner1 = loadImage("./Bilder/Skala1-2.png");
  satisfactionBanner2 = loadImage("./Bilder/Skala3-4.png");
  startHover = loadImage("./Bilder/Start-Screen-Hover.png");
  nextHover = loadImage("./Bilder/Weiter-hover.png");
  news = loadImage("./Bilder/News(Screen1-2-3).png");
  phoneHover = loadImage("./Bilder/Screen1-Telefon.png");
  tvHover = loadImage("./Bilder/Screen1-Fernseher.png");
  magazineHover = loadImage("./Bilder/Screen1-Schublade.png");
  windowHover = loadImage("./Bilder/Screen1-Fenster.png");
  newsHover = loadImage("./Bilder/News-Hover(Screen1-2).png");
  intro = loadImage("./Bilder/Einleitung.png");
  watchTv = loadImage("./Bilder/Screen1-Tv-schauen.png");
  watchWindow = loadImage("./Bilder/Screen1-Fenster-schauen.png");
  phoneOptions = loadImage("./Bilder/Screen1-Telefon2.png");
  callHover = loadImage("./Bilder/Screen1-Telefon3.png");
  visitHover = loadImage("./Bilder/Screen1-Telefon4.png");
  call = loadImage("./Bilder/Screen1-telefoniert.png");
  visit = loadImage("./Bilder/Screen1-Familie.png");
  magazineOptions = loadImage("./Bilder/Screen1-Schublade2.png");
  readHover = loadImage("./Bilder/Screen1-Schublade3.png");
  quizHover = loadImage("./Bilder/Screen1-Schublade4.png");
  read = loadImage("./Bilder/Screen1-lesen.png");
  quiz = loadImage("./Bilder/Screen1-rätseln.png");
  screen2 = loadImage("./Bilder/Screen2.png");
  message1 = loadImage("./Bilder/Phase1-Newsanzeige(Screen1-3).png");
  screen3 = loadImage("./Bilder/Screen3.png");
  screen4 = loadImage("./Bilder/Screen4.png");
  resolution4 = loadImage("./Bilder/Ende-Screen4.png");
  phase1 = loadImage("./Bilder/Phase1.png");
  nurse = loadImage("./Bilder/Screen1.2.png");
  nurseHover = loadImage("./Bilder/Screen1-Krankenschwester.png");
  talk = loadImage("./Bilder/Screen1-Krankenschwester-sprechen.png");
  watchWindow2 = loadImage("./Bilder/Screen2-Fenster-schauen.png");
  //quiz = loadImage("/Image/Screen1-rätseln.png, andere Funktion aufrufen(z.B. show())");
}
window.preload = preload;

function mouseClicked() {
  startButton.mouseClicked();
  phoneButton.mouseClicked();
  // phoneButton2.mouseClicked();
  phoneButton.optionCall.mouseClicked();
  phoneButton.optionVisit.mouseClicked();
  nextButton.mouseClicked();
  // nextButton.nextButton2.mouseClicked();
  tvButton.mouseClicked();
  magazineButton.mouseClicked();
  magazineButton.optionRead.mouseClicked();
  magazineButton.optionQuiz.mouseClicked();
  windowButton.mouseClicked();
  newsButton.mouseClicked();
  newsButton.close.mouseClicked();
  nurseButton.mouseClicked();
  show();
}
window.mouseClicked = mouseClicked;

function show() {
  if (showStartScreen === true) {
    image(startScreen, 0, 0);
    startButton.display(startHover);
  }
  if (startButton.showIntro === true) {
    showStartScreen = false;
    image(intro, 0, 0);
    nextButton.display(nextHover);
  }
  // if (nextButton.showPhase1 === true) {
  //   startButton.showIntro = false;
  //   image(phase1, 0, 0);
  //   nextButton.nextButton2.display(nextHover);
  // }
  if (nextButton.showScreen1 === true) {
    startButton.showIntro = false;
    // nextButton.showPhase1 = false;
    image(screen1, 0, 0);
    newsButton.display(news, newsHover, message1);
    phoneButton.display(
      phoneHover,
      phoneOptions,
      callHover,
      visitHover,
      call,
      visit
    );
    tvButton.display(tvHover, watchTv);
    magazineButton.display(
      magazineHover,
      magazineOptions,
      readHover,
      quizHover,
      read,
      quiz
    );
    windowButton.display(windowHover, watchWindow);
    nurseButton.display(nurse, nurseHover, talk);
    //Zufriedenheitsskala
    image(satisfactionBanner1, 0, 0);
    skala.display();
    stroke("#8f8c89");
    strokeWeight(1);
    line(741, 46, 741, 68);
    line(673, 46, 673, 68);
    line(604, 46, 604, 68);
    noStroke();
    if (time % 30 === 0) {
      /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
      skala.decrease();
    }
  }
  if (skala.showScreen2 === true) {
    nextButton.showScreen1 = false;
    image(screen2, 0, 0);
    // newsButton.display(news, newsHover);
    // phoneButton2.display(
    //   phoneHover,
    //   phoneOptions,
    //   callHover,
    //   visitHover,
    //   call,
    //   visit
    // );
    // tvButton.display(tvHover, watchTv);
    // magazineButton2.display(
    //   magazineHover,
    //   magazineOptions,
    //   readHover,
    //   quizHover,
    //   read,
    //   quiz
    // );
    windowButton.display(windowHover, watchWindow);

    //Zufriedenheitsskala
    image(satisfactionBanner1, 0, 0);
    skala.display();
    stroke("#8f8c89");
    strokeWeight(1);
    line(741, 46, 741, 68);
    line(673, 46, 673, 68);
    line(604, 46, 604, 68);
    noStroke();
    if (time % 30 === 0) {
      /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
      skala.decrease();
    }
  }
  if (skala.showScreen3 === true) {
    skala.showScreen2 = false;
    image(screen3, 0, 0);
    //Zufriedenheitsskala
    image(satisfactionBanner2, 0, 0);
    skala.display();
    stroke("#8f8c89");
    strokeWeight(1);
    line(741, 46, 741, 68);
    line(673, 46, 673, 68);
    line(604, 46, 604, 68);
    noStroke();
    if (time % 30 === 0) {
      /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
      skala.decrease();
    }
  }
  if (skala.showScreen4 === true) {
    skala.showScreen3 = false;
    image(screen4, 0, 0);
    //Zufriedenheitsskala
    image(satisfactionBanner2, 0, 0);
    skala.display();
    stroke("#8f8c89");
    strokeWeight(1);
    line(741, 46, 741, 68);
    line(673, 46, 673, 68);
    line(604, 46, 604, 68);
    noStroke();
    if (time % 30 === 0) {
      /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
      skala.decrease();
    }
  }
  if (skala.showResolution4 === true) {
    skala.showScreen4 = false;
    image(resolution4, 0, 0);
  }

  // if (startButton.showIntro === false) {
  //   if (startButton.hitTest(mouseX, mouseY)) {
  //     if (startButton.showIntro === true) {
  //       showStartScreen = false;
  //     }
  //   }
  // }
  // if (nextButton.showScreen1 === false) {
  //   if (nextButton.hitTest(mouseX, mouseY)) {
  //     if (nextButton.showScreen1 === true) {
  //       startButton.showIntro = false;
  //     }
  //   }
  // }
}

function draw() {
  clear();
  time = time + 1;
  show();
  // image(phase1, 0, 0);
  // nextButton.nextButton2.display(nextHover);
  // fill("black");
  // rect(382, 400, 42, 35);

  // image(intro, 0, 0);
  // nextButton.display(nextHover);

  //Screen1
  // image(screen1, 0, 0);
  // image(nurse, 0, 0);
  // image(magazineOptions, 0, 0);
  // fill("black");
  // rect(285, 287, 85, 367);
  // rect(959, 432, 36, 20);
  // image(phoneOptions, 0, 0);
  // tvButton.display(tvHover, watchTv);
  // magazineButton.display(magazineHover);
  // windowButton.display(windowHover);
  // newsButton.display(news, newsHover, message1);

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
