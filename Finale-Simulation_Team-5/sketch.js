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
let newsButton4 = new Newsbutton(1006, 21, 131, 49);
let nurseButton = new Nursebutton(285, 287, 85, 367);
let nurseButton2 = new Nursebutton(188, 287, 85, 367);
let thoughtsButton = new Thoughtsbutton(520, 285, 95, 67);
let thoughtsButton2 = new Thoughtsbutton(620, 238, 95, 67);
let thoughtsButton3 = new Thoughtsbutton(720, 255, 95, 67);
let thoughtsButton4 = new Thoughtsbutton(905, 295, 95, 67);

let time = 0;
let showStartScreen = true;
let timeStop = true;
let decreaseStop = false;

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
let phase1;
let nursePhase1;
let nursePhase2;
let nurse2Phase1;
let nurse2Phase2;
let nurseHoverPhase1;
let nurseHoverPhase2;
let nurseHover2Phase1;
let nurseHover2Phase2;
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
let end1;
let end23;
let end4;
let explanation;
let explanationHover;
let tips;
let tipsHover;

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
  phase1 = loadImage("./Bilder/Phase1.png");
  nursePhase1 = loadImage("./Bilder/Screen1.2.png");
  nursePhase2 = loadImage("./Bilder/Screen1.2-Mundschutz.png");
  nurse2Phase1 = loadImage("./Bilder/Screen2.1-ohneMundschutz.png");
  nurse2Phase2 = loadImage("./Bilder/Screen2.1.png");
  nurseHoverPhase1 = loadImage("./Bilder/Screen1-Krankenschwester.png");
  nurseHoverPhase2 = loadImage(
    "./Bilder/Screen1-KrankenschwesterMundschutz.png"
  );
  nurseHover2Phase1 = loadImage(
    "./Bilder/Screen2-KrankenschwesterOhneMundschutz.png"
  );
  nurseHover2Phase2 = loadImage("./Bilder/Screen2-Krankenschwester.png");
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
  end1 = loadImage("./Bilder/Ende-Screen1.png");
  end23 = loadImage("./Bilder/Ende-Screen2-3.png");
  end4 = loadImage("./Bilder/Ende-Screen4.png");
  explanation = loadImage("./Bilder/Auflösung.png");
  explanationHover = loadImage("./Bilder/Auflösung-Hover.png");
  tips = loadImage("./Bilder/Tipps-Ende.png");
  tipsHover = loadImage("./Bilder/Tipps-Ende-Hover.png");
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
  newsButton4.close4.mouseClicked();
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
    image(intro, 0, 0);
    nextButton.display(nextHover, explanationHover, tipsHover);
  }

  //Phase1
  if (nextButton.state === "showPhase1") {
    startButton.showIntro = false;
    image(phase1, 0, 0);
    nextButton.display(nextHover, explanationHover, tipsHover);
  }

  //Screen1
  if (nextButton.showScreen1 === true) {
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
    image(screen1, 0, 0);

    //Gedanke Screen1
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

    //Aktion Krankenschwester
    if (
      time >= 900 &&
      time < 1110 &&
      nurseButton.show === true &&
      nextButton.state === "phase1"
    ) {
      nurseButton.display(
        nursePhase1,
        nursePhase2,
        nurse2Phase1,
        nurse2Phase2,
        nurseHoverPhase1,
        nurseHoverPhase2,
        nurseHover2Phase1,
        nurseHover2Phase2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
      nurseButton.show = true;
    }
    //Einfluss Krankenschwester Phase1
    if (
      nurseButton.influence === true &&
      nextButton.state === "phase1" &&
      skala.width <= 262.5
    ) {
      skala.width = skala.width + 4;
      nurseButton.influence = false;
    }
    if (
      time >= 900 &&
      time < 1110 &&
      nurseButton.show === true &&
      nextButton.state === "phase2"
    ) {
      nurseButton.display(
        nursePhase1,
        nursePhase2,
        nurse2Phase1,
        nurse2Phase2,
        nurseHoverPhase1,
        nurseHoverPhase2,
        nurseHover2Phase1,
        nurseHover2Phase2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }
    //Einfluss Krankenschwester Phase2
    if (
      nurseButton.influence === true &&
      nextButton.state === "phase2" &&
      skala.width <= 264.5
    ) {
      skala.width = skala.width + 2;
      nurseButton.influence = false;
    }

    //Nachrichten
    if (
      time >= 150 &&
      newsButton.show === true &&
      nextButton.state === "phase1"
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

    //Aktion Telefon
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
    // //Animation Sprechblase-Telefon
    // if (phoneButton.startTele1) {
    //   hideTele1();
    // }
    // //Animation Sprechblase-Familie
    // if (phoneButton.startFam1) {
    //   hideSprechblaseF1();
    // }

    //Einfluss Familie
    if (
      phoneButton.influenceFamily === true &&
      nextButton.state === "phase1" &&
      skala.width <= 261.5
    ) {
      skala.width = skala.width + 5;
      phoneButton.influenceFamily = false;
    }
    if (
      phoneButton.influenceFamily === true &&
      nextButton.state === "phase2" &&
      skala.width <= 262.5
    ) {
      skala.width = skala.width + 4;
      phoneButton.influenceFamily = false;
    }
    //Einfluss Telefon
    if (phoneButton.influencePhone === true && skala.width <= 262.5) {
      skala.width = skala.width + 4;
      phoneButton.influencePhone = false;
    }
    if (
      phoneButton.influence === true &&
      nextButton.state === "phase3" &&
      skala.width <= 262.5
    ) {
      skala.width = skala.width + 4;
      phoneButton.influence = false;
    }

    //Aktion Fernseher
    tvButton.display(
      tvHover,
      tvHover2,
      watchTv,
      watchTv2,
      nextButton.get(),
      skala.getArray(0)
    );
    //Einfluss Fernseher
    if (tvButton.influence === true && skala.width <= 264.5) {
      skala.width = skala.width + 2;
      tvButton.influence = false;
    }

    //Aktion Schublade
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
    //Einfluss Lesen
    if (magazineButton.influenceRead === true && skala.width <= 263.5) {
      skala.width = skala.width + 3;
      magazineButton.influenceRead = false;
    }
    //Einfluss Schreiben
    if (magazineButton.influenceQuiz === true && skala.width <= 263.5) {
      skala.width = skala.width + 3;
      magazineButton.influenceQuiz = false;
    }

    //Aktion Fenster
    windowButton.display(
      windowHover,
      watchWindow,
      watchWindow2,
      nextButton.get(),
      skala.getArray(0)
    );
    //Einfluss Fenster
    if (windowButton.influence === true && skala.width <= 263.5) {
      skala.width = skala.width + 3;
      windowButton.influence = false;
    }

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
      //bei dem modulo-Operator hatten wir Hilfe von Julias Freund
      /* % = modulo; wenn Zahl von time durch 30 geteilt wird und
    kein Rest (wegen === 0) übrigbleibt, wird decrease() ausgeführt */
      if (decreaseStop === false) {
        skala.decrease();
      }
    }
  }

  //Screen2
  if (skala.showScreen2 === true) {
    nextButton.showScreen1 = false;
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
    image(screen2, 0, 0);

    //Gedanke Screen2
    if (time >= 2250 && time < 2500) {
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

    //Aktion Krankenschwester
    if (
      time >= 2800 &&
      time < 3010 &&
      nurseButton2.show === true &&
      nextButton.state === "phase1"
    ) {
      nurseButton2.display(
        nursePhase1,
        nursePhase2,
        nurse2Phase1,
        nurse2Phase2,
        nurseHoverPhase1,
        nurseHoverPhase2,
        nurseHover2Phase1,
        nurseHover2Phase2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }
    //Einfluss Krankenschwester Phase1
    if (
      nurseButton2.influence === true &&
      nextButton.state === "phase1" &&
      skala.width <= 197.5
    ) {
      skala.width = skala.width + 4;
      nurseButton2.influence = false;
    }
    if (
      time >= 2800 &&
      time < 3010 &&
      nurseButton2.show === true &&
      nextButton.state === "phase2"
    ) {
      nurseButton2.display(
        nursePhase1,
        nursePhase2,
        nurse2Phase1,
        nurse2Phase2,
        nurseHoverPhase1,
        nurseHoverPhase2,
        nurseHover2Phase1,
        nurseHover2Phase2,
        talkPhase1,
        talk2Phase1,
        talkPhase2,
        talk2Phase2,
        nextButton.getState(),
        nextButton.get(),
        skala.getArray(0)
      );
    }
    //Einfluss Krankenschwester Phase2
    if (
      nurseButton2.influence === true &&
      nextButton.state === "phase2" &&
      skala.width <= 199.5
    ) {
      skala.width = skala.width + 2;
      nurseButton2.influence = false;
    }

    //Nachrichten
    if (newsButton.show === true && nextButton.state === "phase1") {
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

    //Aktion Telefon
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
    // //Animation Sprechblase-Telefon
    // if (phoneButton2.startTele2) {
    //   hideTele2();
    // }

    //Einfluss Familie
    if (
      phoneButton2.influenceFamily === true &&
      nextButton.state === "phase1" &&
      skala.width <= 196.5
    ) {
      skala.width = skala.width + 5;
      phoneButton2.influenceFamily = false;
    }
    if (
      phoneButton2.influenceFamily === true &&
      nextButton.state === "phase2" &&
      skala.width <= 197.5
    ) {
      skala.width = skala.width + 4;
      phoneButton2.influenceFamily = false;
    }
    //Einfluss Telefon
    if (phoneButton2.influencePhone === true && skala.width <= 197.5) {
      skala.width = skala.width + 4;
      phoneButton2.influencePhone = false;
    }
    if (
      phoneButton2.influence === true &&
      nextButton.state === "phase3" &&
      skala.width <= 197.5
    ) {
      skala.width = skala.width + 4;
      phoneButton2.influence = false;
    }

    //Aktion Fernseher
    tvButton.display(
      tvHover,
      tvHover2,
      watchTv,
      watchTv2,
      nextButton.get(),
      skala.getArray(0)
    );

    //Aktion Schublade
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
    //Einfluss Lesen
    if (magazineButton2.influenceRead === true && skala.width <= 198.5) {
      skala.width = skala.width + 3;
      magazineButton2.influenceRead = false;
    }
    //Einfluss Schreiben
    if (magazineButton2.influenceQuiz === true && skala.width <= 198.5) {
      skala.width = skala.width + 3;
      magazineButton2.influenceQuiz = false;
    }

    //Aktion Fenster
    windowButton.display(
      windowHover,
      watchWindow,
      watchWindow2,
      nextButton.get(),
      skala.getArray(0)
    );
    //Einfluss Fenster
    if (windowButton.influence === true && skala.width <= 199.5) {
      skala.width = skala.width + 2;
      windowButton.influence = false;
    }

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
      if (decreaseStop === false) {
        skala.decrease();
      }
    }
  }

  //Screen3
  if (skala.showScreen3 === true) {
    skala.showScreen2 = false;
    skala.showArray[0] = skala.showScreen2;
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
    image(screen3, 0, 0);

    // //Animation Wippen
    // document.getElementById("Wippen3").style.display = "block";

    // //Animation Glühbirne-flackern
    // document.getElementById("Lampe").style.display = "block";

    //Gedanke Screen3
    if (time >= 4410 && time < 4660) {
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
    //Einfluss Gedanke
    if (thoughtsButton3.influence === true) {
      skala.width = skala.width - 2;
      thoughtsButton3.influence = false;
    }

    //Nachrichten
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

    //Aktion Telefon
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
    // //Animation Sprechblase-Telefon
    // if (phoneButton3.startTele3) {
    //   hideTele3();
    // }
    //Einfluss Telefon
    if (phoneButton3.influence === true && skala.width <= 131.5) {
      skala.width = skala.width + 2;
      phoneButton3.influence = false;
    }

    //Aktion Schublade
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
    //Einfluss Schreiben
    if (magazineButton3.influence === true && skala.width <= 132.5) {
      skala.width = skala.width + 1;
      magazineButton3.influence = false;
    }

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
      if (decreaseStop === false) {
        skala.decrease();
      }
    }
  }

  //Screen4
  if (skala.showScreen4 === true) {
    nextButton.showScreen1 = false;
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    image(screen4, 0, 0);

    // //Animation Wippen von Screen3 stoppen
    // document.getElementById("Wippen3").style.display = "none";

    // //Animation Glühbirne-flackern von Screen 3 stoppen
    // document.getElementById("Lampe").style.display = "none";

    // //Animation Wippen von Screen4
    // document.getElementById("Wippen4").style.display = "block";

    //Gedanke Screen4
    if (time >= 5400 && time < 5650) {
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
    //Einfluss Gedanke
    if (thoughtsButton4.influence === true) {
      skala.width = skala.width - 2;
      thoughtsButton4.influence = false;
    }

    //Nachrichten
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

    //Aktion Schublade
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
      if (decreaseStop === false) {
        skala.decrease();
      }
    }
  }

  //Phase2
  if (time >= 4100 && time < 5000) {
    nextButton.state = "phase2";
  }
  if (nextButton.state === "phase2" && nextButton.showPhase2 === true) {
    nextButton.timeStop = true;
    image(phase2, 0, 0);
    // //Animation Wippen von Screen 3 stoppen
    // document.getElementById("Wippen3").style.display = "none";
    // //Animation Glühbirne-flackern von Screen 3 stoppen
    // document.getElementById("Lampe").style.display = "none";
    // //Animation Rätsel Screen1 stoppen
    // document.getElementById("Rätsel").style.display = "none";
    // //Animation Rätsel Screen2 stoppen
    // document.getElementById("Rätsel2").style.display = "none";
    nextButton.display(nextHover, explanationHover, tipsHover);
    newsButton.show = true;
    nurseButton.show = true;
  }

  //Phase3
  if (time >= 5000 && time < 5996) {
    nextButton.state = "phase3";
  }
  if (nextButton.state === "phase3" && nextButton.showPhase3 === true) {
    nextButton.timeStop = true;
    image(phase3, 0, 0);
    // //Animation Wippen von Screen 3 stoppen
    // document.getElementById("Wippen3").style.display = "none";
    // //Animation Glühbirne-flackern von Screen 3 stoppen
    // document.getElementById("Lampe").style.display = "none";
    // //Animation Wippen von Screen4 stoppen
    // document.getElementById("Wippen4").style.display = "none";
    // //Animation Rätsel Screen1 stoppen
    // document.getElementById("Rätsel").style.display = "none";
    // //Animation Rätsel Screen2 stoppen
    // document.getElementById("Rätsel2").style.display = "none";
    nextButton.display(nextHover, explanationHover, tipsHover);
    newsButton.show = true;
    nurseButton.show = true;
  }

  if (time >= 5996) {
    timeStop = true;
    nextButton.timeStop = true;
    // decreaseStop = true;
  }

  if (
    time >= 5996 &&
    nextButton.showScreen1 === true &&
    nextButton.state != "resolution"
  ) {
    nextButton.state = "end1";
    nextButton.showScreen1 = false;
  }
  if (nextButton.state === "end1" && nextButton.showEnd1 === true) {
    nextButton.timeStop = true;
    // //Animation Rätsel Screen1 stoppen
    // document.getElementById("Rätsel").style.display = "none";
    // //Animation Rätsel Screen2 stoppen
    // document.getElementById("Rätsel2").style.display = "none";
    image(end1, 0, 0);
    nextButton.display(nextHover, explanationHover, tipsHover);
  }
  if (
    time >= 5996 &&
    skala.getArray(0) === true &&
    nextButton.state != "resolution"
  ) {
    nextButton.state = "end23";
    skala.showScreen2 = false;
    skala.showArray[0] = skala.showScreen2;
  }
  if (
    time >= 5996 &&
    skala.getArray(1) === true &&
    nextButton.state != "resolution"
  ) {
    nextButton.state = "end23";
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
  }
  if (nextButton.state === "end23" && nextButton.showEnd23 === true) {
    nextButton.timeStop = true;
    timeStop = true;
    // //Animation Wippen von Screen 3 stoppen
    // document.getElementById("Wippen3").style.display = "none";
    // //Animation Glühbirne-flackern von Screen 3 stoppen
    // document.getElementById("Lampe").style.display = "none";
    // //Animation Wippen von Screen4 stoppen
    // document.getElementById("Wippen4").style.display = "none";
    // //Animation Rätsel Screen1 stoppen
    // document.getElementById("Rätsel").style.display = "none";
    // //Animation Rätsel Screen2 stoppen
    // document.getElementById("Rätsel2").style.display = "none";
    image(end23, 0, 0);
    nextButton.display(nextHover, explanationHover, tipsHover);
  }
  if (
    time >= 5996 &&
    skala.getArray(2) === true &&
    nextButton.state != "resolution"
  ) {
    nextButton.state = "end4";
    skala.showScreen4 = false;
    skala.showArray[2] = skala.showScreen4;
  }

  if (nextButton.state === "end4" && nextButton.showEnd4 === true) {
    nextButton.timeStop = true;
    timeStop = true;
    // //Animation Wippen von Screen 3 stoppen
    // document.getElementById("Wippen3").style.display = "none";
    // //Animation Glühbirne-flackern von Screen 3 stoppen
    // document.getElementById("Lampe").style.display = "none";
    // //Animation Wippen von Screen4 stoppen
    // document.getElementById("Wippen4").style.display = "none";
    image(end4, 0, 0);
    nextButton.display(nextHover, explanationHover, tipsHover);
  }

  if (nextButton.state === "resolution" && nextButton.showResolution === true) {
    nextButton.timeStop = true;
    timeStop = true;
    image(explanation, 0, 0);
    nextButton.display(nextHover, explanationHover, tipsHover);
  }
  if (nextButton.showTips === true) {
    nextButton.timeStop = true;
    timeStop = true;
    image(tips, 0, 0);
  }
}

// let telefonieren = 0;
// let telefon = document.getElementById("Telefonieren");

// function hideTele1() {
//   telefonieren++;
//   if (telefonieren > 150) {
//     telefon.style.display = "none";
//     telefonieren = 0;
//   }
// }

// let telefoniern2 = 0;
// let telefon2 = document.getElementById("Telefonieren");

// function hideTele2() {
//   telefoniern2++;
//   if (telefoniern2 > 100) {
//     telefon2.style.display = "none";
//     telefoniern2 = 0;
//   }
// }
// let telefonieren3 = 0;
// let telefon3 = document.getElementById("Telefonieren");

// function hideTele3() {
//   telefonieren3++;
//   if (telefonieren3 > 100) {
//     telefon3.style.display = "none";
//     telefonieren3 = 0;
//   }
// }
// let sprechblasef1 = 0;
// let Sprechblasefamilie = document.getElementById("SprechblaseTochter2");

// function hideSprechblaseF1() {
//   sprechblasef1++;
//   if (sprechblasef1 > 100) {
//     Sprechblasefamilie.style.display = "none";
//     sprechblasef1 = 0;
//   }
// }
// let sprechblasef2 = 0;
// let Sprechblase2 = document.getElementById("SprechblaseTochter2");

// function hideSprechblaseF2() {
//   sprechblasef2++;
//   if (sprechblasef2 > 100) {
//     Sprechblase2.style.display = "none";
//     sprechblasef2 = 0;
//   }
// }
// let fernseher1 = 0;
// let fernseher = document.getElementById("Fernseher");

// function hideTv1() {
//   fernseher1++;
//   if (fernseher1 > 100) {
//     fernseher.style.display = "none";
//     fernseher1 = 0;
//   }
// }
// let flackern2 = 0;
// let flacker = document.getElementById("Flackern");

// function hideFlackern() {
//   flackern2++;
//   if (flackern2 > 100) {
//     flacker.style.display = "none";
//     flackern2 = 0;
//   }
// }
// let rätsel1 = 0;
// let rätseln = document.getElementById("Rätsel");

// function hideRätsel1() {
//   rätsel1++;
//   if (rätsel1 > 110) {
//     rätseln.style.display = "none";
//     rätsel1 = 0;
//   }
// }
// let rätseln2 = 0;
// let rätsel2 = document.getElementById("Rätsel2");

// function hideRätseln2() {
//   rätseln2++;
//   if (rätseln2 > 100) {
//     rätsel2.style.display = "none";
//     rätseln2 = 0;
//   }
// }

function draw() {
  clear();
  if (nextButton.state === "phase1") {
    timeStop = false;
  }
  if (timeStop === false && nextButton.timeStop === false) {
    time = time + 1;
  }
  show();
  // if (phoneButton2.startFam2) {
  //   hideSprechblaseF2();
  // }
  // if (tvButton.startTv1) {
  //   hideTv1();
  // }
  // if (tvButton.startTv2) {
  //   hideFlackern();
  // }
  // if (magazineButton.startRätsel) {
  //   hideRätsel1();
  // }
  // if (magazineButton2.startRätsel2) {
  //   hideRätseln2();
  // }
}
window.draw = draw;
