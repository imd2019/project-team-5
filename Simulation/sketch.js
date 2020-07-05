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
import Thoughtsbutton from "./thoughtsbutton.js";

// let nurse = new Button(x, y, width, height);
// let thoughts = new Button(x, y, width, height);
let startButton = new Startbutton(824, 496, 339, 72);
let nextButton = new Nextbutton(992, 637, 292, 58);
let skala = new Satisfaction(539.5, 44.5, 266.5, 24);
let phoneButton = new Phonebutton(394, 510, 42, 35);
let phoneButton2 = new Phonebutton(382, 404, 42, 27);
let phoneButton3 = new Phonebutton(635, 641, 42, 24);
let tvButton = new Tvbutton(48, 400, 80, 93);
let windowButton = new Windowbutton(1141, 208, 179, 173);
let magazineButton = new Magazinebutton(885, 469, 136, 40);
let magazineButton2 = new Magazinebutton(336, 552, 135, 57);
let magazineButton3 = new Magazinebutton(1018, 580, 119, 28);
let magazineButton4 = new Magazinebutton(684, 576, 119, 28);
let newsButton = new Newsbutton(1189, 22, 131, 49);
let newsButton4 = new Newsbutton(826, 21, 131, 49);
let nurseButton = new Nursebutton(285, 287, 85, 367);
let nurseButton2 = new Nursebutton(188, 287, 85, 367);
let thoughtsButton = new Thoughtsbutton(520, 285, 95, 67);
let thoughtsButton2 = new Thoughtsbutton(620, 238, 95, 67);
let thoughtsButton3 = new Thoughtsbutton(720, 255, 95, 67);
let thoughtsButton4 = new Thoughtsbutton(905, 295, 95, 67);

let time = 0;
let showStartScreen = true;
let timeStop = true;
// let showPhase1 = false;

let startScreen;
let screen1;
let satisfactionBanner1;
let satisfactionBanner2;
let startHover;
let nextHover;
let news;
let news4;
let phoneHover;
let phoneHover2;
let phoneHover3;
let tvHover;
let tvHover2;
let magazineHover;
let magazineHover2;
let magazineHover3;
let magazineHover4;
let windowHover;
let newsHover;
let newsHover3;
let newsHover4;
let intro;
let watchTv;
let watchTv2;
let watchWindow;
let watchWindow2;
let phoneOptions;
let phoneOptions2;
let callHover;
let callHover2;
let visitHover;
let visitHover2;
let call;
let call2;
let call3;
let visitPhase1;
let visitPhase2;
let visit2Phase1;
let visit2Phase2;
let magazineOptions;
let magazineOptions2;
let readHover;
let readHover2;
let quizHover;
let quizHover2;
let read;
let read2;
let quiz;
let quiz2;
let quiz3;
let quiz4;
let screen2;
let message1;
let message2;
let message3;
let message3Screen4;
let screen3;
let screen4;
let resolution4;
let phase1;
let nurse;
let nurse2;
let nurseHover;
let nurseHover2;
let talkPhase1;
let talk2Phase1;
let talkPhase2;
let talk2Phase2;
let thoughtBubble;
let thoughtBubble2;
let thoughtBubble3;
let thoughtBubble4;
let thoughtBubbleHover;
let thoughtBubbleHover2;
let thoughtBubbleHover3;
let thoughtBubbleHover4;
let thought;
let thought2;
let thought3;
let thought4;
let thoughtSpeak;
let phase2;
let phase3;

function preload() {
  startScreen = loadImage("./Bilder/Start-Screen.png");
  screen1 = loadImage("./Bilder/Screen1.png");
  satisfactionBanner1 = loadImage("./Bilder/Skala1-2.png");
  satisfactionBanner2 = loadImage("./Bilder/Skala3-4.png");
  startHover = loadImage("./Bilder/Start-Screen-Hover.png");
  nextHover = loadImage("./Bilder/Weiter-hover.png");
  news = loadImage("./Bilder/News(Screen1-2-3).png");
  news4 = loadImage("./Bilder/News(Screen4).png");
  phoneHover = loadImage("./Bilder/Screen1-Telefon.png");
  phoneHover2 = loadImage("./Bilder/Screen2-Telefon.png");
  phoneHover3 = loadImage("./Bilder/Screen3-Telefon.png");
  tvHover = loadImage("./Bilder/Screen1-Fernseher.png");
  tvHover2 = loadImage("./Bilder/Screen2-TV.png");
  magazineHover = loadImage("./Bilder/Screen1-Schublade.png");
  magazineHover2 = loadImage("./Bilder/Screen2-Schublade.png");
  magazineHover3 = loadImage("./Bilder/Screen3-Rätsel.png");
  magazineHover4 = loadImage("./Bilder/Screen4-Rätsel.png");
  windowHover = loadImage("./Bilder/Screen1-Fenster.png");
  newsHover = loadImage("./Bilder/News-Hover(Screen1-2).png");
  newsHover3 = loadImage("./Bilder/News-Hover(Screen3).png");
  newsHover4 = loadImage("./Bilder/News-Hover(Screen4).png");
  intro = loadImage("./Bilder/Einleitung.png");
  watchTv = loadImage("./Bilder/Screen1-Tv-schauen.png");
  watchTv2 = loadImage("./Bilder/Screen2-TV-schauen.png");
  watchWindow = loadImage("./Bilder/Screen1-Fenster-schauen.png");
  phoneOptions = loadImage("./Bilder/Screen1-Telefon2.png");
  phoneOptions2 = loadImage("./Bilder/Screen2-Telefon2.png");
  callHover = loadImage("./Bilder/Screen1-Telefon3.png");
  callHover2 = loadImage("./Bilder/Screen2-Telefon3.png");
  visitHover = loadImage("./Bilder/Screen1-Telefon4.png");
  visitHover2 = loadImage("./Bilder/Screen2-Telefon4.png");
  call = loadImage("./Bilder/Screen1-telefoniert.png");
  call2 = loadImage("./Bilder/Screen2-Telefoniert.png");
  call3 = loadImage("./Bilder/Screen3-telefoniert.png");
  visitPhase1 = loadImage("./Bilder/Screen1-Familie.png");
  visitPhase2 = loadImage("./Bilder/Screen1-Familie(abPhase2).png");
  visit2Phase1 = loadImage("./Bilder/Screen2-Familie(Phase1).png");
  visit2Phase2 = loadImage("./Bilder/Screen2-Tochter-kommt.png");
  magazineOptions = loadImage("./Bilder/Screen1-Schublade2.png");
  magazineOptions2 = loadImage("./Bilder/Screen2-Schublade2.png");
  readHover = loadImage("./Bilder/Screen1-Schublade3.png");
  readHover2 = loadImage("./Bilder/Screen2-Schublade3.png");
  quizHover = loadImage("./Bilder/Screen1-Schublade4.png");
  quizHover2 = loadImage("./Bilder/Screen2-Schublade4.png");
  read = loadImage("./Bilder/Screen1-lesen.png");
  read2 = loadImage("./Bilder/Screen2-lesen.png");
  quiz = loadImage("./Bilder/Screen1-rätseln.png");
  quiz2 = loadImage("./Bilder/Screen2-rätseln.png");
  quiz3 = loadImage("./Bilder/Screen3-rätseln.png");
  quiz4 = loadImage("./Bilder/Screen4-rätseln.png");
  screen2 = loadImage("./Bilder/Screen2.png");
  message1 = loadImage("./Bilder/Phase1-Newsanzeige(Screen1-3).png");
  message2 = loadImage("./Bilder/Phase2-Newsanzeige(Screen1-3).png");
  message3 = loadImage("./Bilder/Phase3-Newsanzeige(Screen1-3).png");
  message3Screen4 = loadImage("./Bilder/Phase3-Newsanzeige(Screen4).png");
  screen3 = loadImage("./Bilder/Screen3.png");
  screen4 = loadImage("./Bilder/Screen4.png");
  resolution4 = loadImage("./Bilder/Ende-Screen4.png");
  phase1 = loadImage("./Bilder/Phase1.png");
  nurse = loadImage("./Bilder/Screen1.2.png");
  nurse2 = loadImage("./Bilder/Screen2.1.png");
  nurseHover = loadImage("./Bilder/Screen1-Krankenschwester.png");
  nurseHover2 = loadImage("./Bilder/Screen2-Krankenschwester.png");
  talkPhase1 = loadImage("./Bilder/Screen1-Krankenschwester-sprechen.png");
  talk2Phase1 = loadImage("./Bilder/Screen2-Krankenschwester(Phase1).png");
  talkPhase2 = loadImage("./Bilder/Screen1-Krankenschwester(abPhase2).png");
  talk2Phase2 = loadImage("./Bilder/Screen2-Krankenschwester-sprechen.png");
  watchWindow2 = loadImage("./Bilder/Screen2-Fenster-schauen.png");
  thoughtBubble = loadImage("./Bilder/Gedanken-Screens/Screen1-Gedanke1.png");
  thoughtBubble2 = loadImage("./Bilder/Gedanken-Screens/Screen2-Gedanke1.png");
  thoughtBubble3 = loadImage("./Bilder/Gedanken-Screens/Screen3-Gedanke1.png");
  thoughtBubble4 = loadImage("./Bilder/Gedanken-Screens/Screen4-Gedanke2.png");
  thoughtBubbleHover = loadImage(
    "./Bilder/Gedanken-Screens/Screen1-Gedanke1.1.png"
  );
  thoughtBubbleHover2 = loadImage(
    "./Bilder/Gedanken-Screens/Screen2-Gedanke1.1.png"
  );
  thoughtBubbleHover3 = loadImage(
    "./Bilder/Gedanken-Screens/Screen3-Gedanke1.1.png"
  );
  thoughtBubbleHover4 = loadImage(
    "./Bilder/Gedanken-Screens/Screen4-Gedanke2.1.png"
  );
  thought = loadImage("./Bilder/Gedanken-Screens/Screen1-Gedanke1.2.png");
  thought2 = loadImage("./Bilder/Gedanken-Screens/Screen2-Gedanke1.2.png");
  thought3 = loadImage("./Bilder/Gedanken-Screens/Screen3-Gedanke1.2.png");
  thought4 = loadImage("./Bilder/Gedanken-Screens/Screen4-Gedanke2.2.png");
  phase2 = loadImage("./Bilder/Phase2.png");
  phase3 = loadImage("./Bilder/Phase3.png");
  //quiz = loadImage("/Image/Screen1-rätseln.png, andere Funktion aufrufen(z.B. show())");
  // soundFormats("wav"); //mp3-Datei ist kleiner im Format
  // thoughtSpeak = loadSound("./Bilder/Sound/Screen1-Gedanke-gesprochen1.2.wav");
}
window.preload = preload;

function mouseClicked() {
  startButton.mouseClicked();
  phoneButton.mouseClicked();
  phoneButton2.mouseClicked();
  phoneButton3.mouseClicked();
  phoneButton.optionCall.mouseClicked();
  phoneButton2.optionCall2.mouseClicked();
  phoneButton.optionVisit.mouseClicked();
  phoneButton2.optionVisit2.mouseClicked();
  nextButton.mouseClicked();
  // nextButton.nextButton2.mouseClicked();
  tvButton.mouseClicked();
  magazineButton.mouseClicked();
  magazineButton2.mouseClicked();
  magazineButton3.mouseClicked();
  magazineButton4.mouseClicked();
  magazineButton.optionRead.mouseClicked();
  magazineButton2.optionRead2.mouseClicked();
  magazineButton.optionQuiz.mouseClicked();
  magazineButton2.optionQuiz2.mouseClicked();
  windowButton.mouseClicked();
  newsButton.mouseClicked();
  newsButton4.mouseClicked();
  newsButton.close.mouseClicked();
  newsButton4.close.mouseClicked();
  nurseButton.mouseClicked();
  nurseButton2.mouseClicked();
  thoughtsButton.mouseClicked();
  thoughtsButton2.mouseClicked();
  thoughtsButton3.mouseClicked();
  thoughtsButton4.mouseClicked();
}
window.mouseClicked = mouseClicked;

function show() {
  //Start
  if (showStartScreen === true) {
    image(startScreen, 0, 0);
    startButton.display(startHover);
  }

  //Einleitung
  if (startButton.showIntro === true) {
    showStartScreen = false;
    // nextButton.state = "intro";
    image(intro, 0, 0);
    nextButton.display(nextHover);
  }

  //Phase1
  if (nextButton.state === "phase1") {
    startButton.showIntro = false;
    image(phase1, 0, 0);
    nextButton.display(nextHover);
    // showPhase1 = true;
  }

  //Screen1
  if (nextButton.state === "screen1") {
    // startButton.showIntro = false;
    nextButton.showPhase1 = false;
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
    image(screen1, 0, 0);

    //Gedanken Screen1
    if (time >= 300 && time < 550) {
      thoughtsButton.display(
        thoughtBubble,
        thoughtBubble2,
        thoughtBubble3,
        thoughtBubble4,
        thoughtBubbleHover,
        thoughtBubbleHover2,
        thoughtBubbleHover3,
        thoughtBubbleHover4,
        thought,
        thought2,
        thought3,
        thought4,
        thoughtSpeak,
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }
    //Aktionen Screen1
    if (
      time >= 900 &&
      time < 1110 &&
      nurseButton.show === true &&
      nextButton.state === "screen1"
    ) {
      nurseButton.display(
        nurse,
        nurse2,
        nurseHover,
        nurseHover2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }
    if (
      time >= 900 &&
      time < 1110 &&
      nurseButton.show === true &&
      nextButton.state === "phase2"
    ) {
      nurseButton.display(
        nurse,
        nurse2,
        nurseHover,
        nurseHover2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }
    if (nurseButton.action === true) {
      skala.width = skala.width + 4;
      nurseButton.action = false;
    }

    if (
      time >= 150 &&
      newsButton.show === true &&
      nextButton.state === "screen1"
    ) {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (
      time >= 2600 &&
      newsButton.show === true &&
      nextButton.state === "phase2"
    ) {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (
      time >= 4400 &&
      newsButton.show === true &&
      nextButton.state === "phase3"
    ) {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }
    phoneButton.display(
      phoneHover,
      phoneHover2,
      phoneHover3,
      phoneOptions,
      phoneOptions2,
      callHover,
      callHover2,
      visitHover,
      visitHover2,
      call,
      call2,
      call3,
      visitPhase1,
      visitPhase2,
      visit2Phase1,
      visit2Phase2,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      nextButton.getState()
    );
    tvButton.display(
      tvHover,
      tvHover2,
      watchTv,
      watchTv2,
      nextButton.get(),
      skala.getArray(0)
    );
    magazineButton.display(
      magazineHover,
      magazineHover2,
      magazineHover3,
      magazineHover4,
      magazineOptions,
      magazineOptions2,
      readHover,
      readHover2,
      quizHover,
      quizHover2,
      read,
      read2,
      quiz,
      quiz2,
      quiz3,
      quiz4,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      skala.getArray(2)
    );
    windowButton.display(
      windowHover,
      watchWindow,
      watchWindow2,
      nextButton.get(),
      skala.getArray(0)
    );

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

  //Screen2
  if (skala.showScreen2 === true) {
    // nextButton.state = false;
    nextButton.showScreen1 = false;
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
    image(screen2, 0, 0);

    //Gedanken Screen2
    if (time >= 2300 && time < 2550) {
      thoughtsButton2.display(
        thoughtBubble,
        thoughtBubble2,
        thoughtBubble3,
        thoughtBubble4,
        thoughtBubbleHover,
        thoughtBubbleHover2,
        thoughtBubbleHover3,
        thoughtBubbleHover4,
        thought,
        thought2,
        thought3,
        thought4,
        thoughtSpeak,
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }
    if (
      time >= 2800 &&
      time < 3910 &&
      nurseButton2.show === true &&
      nextButton.state === "screen1"
    ) {
      nurseButton2.display(
        nurse,
        nurse2,
        nurseHover,
        nurseHover2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }
    if (
      time >= 2800 &&
      time < 3910 &&
      nurseButton2.show === true &&
      nextButton.state === "phase2"
    ) {
      nurseButton2.display(
        nurse,
        nurse2,
        nurseHover,
        nurseHover2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }

    if (newsButton.show === true && nextButton.state === "screen1") {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (
      time >= 2600 &&
      newsButton.show === true &&
      nextButton.state === "phase2"
    ) {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (
      time >= 4400 &&
      newsButton.show === true &&
      nextButton.state === "phase3"
    ) {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    phoneButton2.display(
      phoneHover,
      phoneHover2,
      phoneHover3,
      phoneOptions,
      phoneOptions2,
      callHover,
      callHover2,
      visitHover,
      visitHover2,
      call,
      call2,
      call3,
      visitPhase1,
      visitPhase2,
      visit2Phase1,
      visit2Phase2,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      nextButton.getState()
    );
    tvButton.display(
      tvHover,
      tvHover2,
      watchTv,
      watchTv2,
      nextButton.get(),
      skala.getArray(0)
    );
    magazineButton2.display(
      magazineHover,
      magazineHover2,
      magazineHover3,
      magazineHover4,
      magazineOptions,
      magazineOptions2,
      readHover,
      readHover2,
      quizHover,
      quizHover2,
      read,
      read2,
      quiz,
      quiz2,
      quiz3,
      quiz4,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      skala.getArray(2)
    );

    windowButton.display(
      windowHover,
      watchWindow,
      watchWindow2,
      nextButton.get(),
      skala.getArray(0)
    );
    // windowButton.display(
    //   windowHover,
    //   watchWindow,
    //   watchWindow2,
    //   nextButton.showScreen1,
    //   skala.getArray(0)
    // );
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

  //Screen3
  if (skala.showScreen3 === true) {
    skala.showScreen2 = false;
    skala.showArray[0] = skala.showScreen2;
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
    image(screen3, 0, 0);

    //Gedanken Screen3
    if (time >= 3800 && time < 4050) {
      thoughtsButton3.display(
        thoughtBubble,
        thoughtBubble2,
        thoughtBubble3,
        thoughtBubble4,
        thoughtBubbleHover,
        thoughtBubbleHover2,
        thoughtBubbleHover3,
        thoughtBubbleHover4,
        thought,
        thought2,
        thought3,
        thought4,
        thoughtSpeak,
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (newsButton.show === true && nextButton.state === "phase2") {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (
      time >= 4400 &&
      newsButton.show === true &&
      nextButton.state === "phase3"
    ) {
      newsButton.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    phoneButton3.display(
      phoneHover,
      phoneHover2,
      phoneHover3,
      phoneOptions,
      phoneOptions2,
      callHover,
      callHover2,
      visitHover,
      visitHover2,
      call,
      call2,
      call3,
      visitPhase1,
      visitPhase2,
      visit2Phase1,
      visit2Phase2,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      nextButton.getState()
    );
    magazineButton3.display(
      magazineHover,
      magazineHover2,
      magazineHover3,
      magazineHover4,
      magazineOptions,
      magazineOptions2,
      readHover,
      readHover2,
      quizHover,
      quizHover2,
      read,
      read2,
      quiz,
      quiz2,
      quiz3,
      quiz4,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      skala.getArray(2)
    );
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

  //Screen4
  if (skala.showScreen4 === true) {
    nextButton.showScreen1 = false;
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    image(screen4, 0, 0);

    //Gedanken Screen4
    if (time >= 4800 && time < 4950) {
      thoughtsButton4.display(
        thoughtBubble,
        thoughtBubble2,
        thoughtBubble3,
        thoughtBubble4,
        thoughtBubbleHover,
        thoughtBubbleHover2,
        thoughtBubbleHover3,
        thoughtBubbleHover4,
        thought,
        thought2,
        thought3,
        thought4,
        thoughtSpeak,
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }

    if (newsButton4.show === true && nextButton.state === "phase3") {
      newsButton4.display(
        news,
        news4,
        newsHover,
        newsHover3,
        newsHover4,
        message1,
        message2,
        message3,
        message3Screen4,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0),
        skala.getArray(1),
        skala.getArray(2)
      );
    }
    magazineButton4.display(
      magazineHover,
      magazineHover2,
      magazineHover3,
      magazineHover4,
      magazineOptions,
      magazineOptions2,
      readHover,
      readHover2,
      quizHover,
      quizHover2,
      read,
      read2,
      quiz,
      quiz2,
      quiz3,
      quiz4,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1),
      skala.getArray(2)
    );
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
    skala.showArray[2] = skala.showScreen4;
    nextButton.state = "End4";
    if (nextButton.state === "End4" && nextButton.showEnd4 === true) {
      nextButton.timeStop = true;
      image(resolution4, 0, 0);
      nextButton.display(nextHover);
    }
  }
  // if (time >= 3050 && bla === true) {
  //   showPhase2 = true;
  //   // showPhase1 = false;
  //   // if (showPhase2 === true) {
  //   //   image(phase2, 0, 0);
  //   //   nextButton.display(nextHover);
  //   //   nextButton.state = "phase2";
  //   //   if (nextButton.state === "phase2") {
  //   //     showPhase2 = false;
  //   //   }
  //   // }
  // }
  // if (showPhase2 === true) {
  //   image(phase2, 0, 0);
  //   nextButton.display(nextHover);
  //   nextButton.state = "phase2";
  //   if (nextButton.state === "phase3") {
  //     showPhase2 = false;
  //     bla = false;
  //   }
  // }

  if (time >= 2450) {
    nextButton.state = "phase2";
  }
  if (nextButton.state === "phase2" && nextButton.showPhase2 === true) {
    nextButton.timeStop = true;
    // console.log(nextButton.timeStop);
    image(phase2, 0, 0);
    nextButton.display(nextHover);
    newsButton.show = true;
    nurseButton.show = true;
    // nextButton.showScreen1 = false;
  }

  //6350
  if (time >= 4250) {
    nextButton.state = "phase3";
  }
  if (nextButton.state === "phase3" && nextButton.showPhase3 === true) {
    nextButton.timeStop = true;
    image(phase3, 0, 0);
    nextButton.display(nextHover);
    newsButton.show = true;
    nurseButton.show = true;
    // nextButton.showScreen1 = false;
  }

  // if (time >= 2800) {
  //   nextButton.state = "phase3";
  // }
  // if (nextButton.state === "phase3" && nextButton.showPhase3 === true) {
  //   nextButton.timeStop = true;
  //   image(phase3, 0, 0);
  //   nextButton.display(nextHover);
  //   // nextButton.showScreen1 = false;
  // }

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
  // if (startButton.showScreen1 === false) {
  //   if (startButton.hitTest(mouseX, mouseY)) {
  //     console.log("yeah!"); //Hovereffekt
  //     if (startButton.showScreen1 === true) {
  //       showStartScreen = false;
  //     }
  //   }
  // }
}

function draw() {
  clear();
  if (nextButton.state === "screen1") {
    timeStop = false;
  }
  if (timeStop === false && nextButton.timeStop === false) {
    time = time + 1;
  }

  show();
  console.log(nextButton.state);
  console.log(time);
  // console.log(skala.getArray(0));
  // console.log(skala.getArray(1));
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
  // image(thoughtBubble, 0, 0);
  // fill("black");
  // rect(520, 285, 95, 67);
  // rect(959, 432, 36, 20);
  // image(phoneOptions, 0, 0);
  // tvButton.display(tvHover, watchTv);
  // magazineButton.display(magazineHover);
  // windowButton.display(windowHover);
  // newsButton.display(news, newsHover, message1);

  //Screen2
  // image(screen2, 0, 0);
  // image(magazineOptions2, 0, 0);
  // image(phoneOptions2, 0, 0);
  // image(nurse2, 0, 0);
  // image(thoughtBubble2, 0, 0);
  // fill("black");
  // rect(620, 238, 95, 67);
  // rect(410, 515, 36, 20);

  //Screen3
  // image(screen3, 0, 0);
  // image(thoughtBubble3, 0, 0);
  // fill("black");
  // rect(720, 255, 95, 67);

  //Screen4
  // image(screen4, 0, 0);
  // image(news4, 0, 0);
  // image(message3Screen4, 0, 0);
  // image(thoughtBubble4, 0, 0);
  // fill("black");
  // rect(905, 295, 95, 67);

  //Zufriedenheitsskala
  // image(satisfactionBanner2, 0, 0);
  // skala.display();
  // stroke("#8f8c89");
  // strokeWeight(1);
  // line(741, 46, 741, 68);
  // line(673, 46, 673, 68);
  // line(604, 46, 604, 68);
  // noStroke();
  // if (time % 30 === 0) {
  //   /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
  //   kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
  //   skala.decrease();
  // }
}
window.draw = draw;
