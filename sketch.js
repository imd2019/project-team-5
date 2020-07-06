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
let nurseButton = new Nursebutton(285, 287, 85, 367);
let thoughtsButton = new Thoughtsbutton(520, 285, 95, 67);

let time = 0;
let showStartScreen = true;
// let showPhase1 = false;

let startScreen;
let screen1;
let satisfactionBanner1;
let satisfactionBanner2;
let startHover;
let nextHover;
let news;
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
let visit;
let visit2;
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
let screen3;
let screen4;
let resolution4;
let phase1;
let nurse;
let nurseHover;
let talk;
let thoughtBubble;
let thoughtBubbleHover;
let thought;
let thoughtSpeak;
let phase2;

function preload() {
  startScreen = loadImage("./Bilder/Start-Screen.png");
  screen1 = loadImage("./Bilder/Screen1.png");
  satisfactionBanner1 = loadImage("./Bilder/Skala1-2.png");
  satisfactionBanner2 = loadImage("./Bilder/Skala3-4.png");
  startHover = loadImage("./Bilder/Start-Screen-Hover.png");
  nextHover = loadImage("./Bilder/Weiter-hover.png");
  news = loadImage("./Bilder/News(Screen1-2-3).png");
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
  visit = loadImage("./Bilder/Screen1-Familie.png");
  visit2 = loadImage("./Bilder/Screen2-Tochter-kommt.png");
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
  screen3 = loadImage("./Bilder/Screen3.png");
  screen4 = loadImage("./Bilder/Screen4.png");
  resolution4 = loadImage("./Bilder/Ende-Screen4.png");
  phase1 = loadImage("./Bilder/Phase1.png");
  nurse = loadImage("./Bilder/Screen1.2.png");
  nurseHover = loadImage("./Bilder/Screen1-Krankenschwester.png");
  talk = loadImage("./Bilder/Screen1-Krankenschwester-sprechen.png");
  watchWindow2 = loadImage("./Bilder/Screen2-Fenster-schauen.png");
  thoughtBubble = loadImage("./Bilder/Gedanken-Screens/Screen1-Gedanke1.png");
  thoughtBubbleHover = loadImage(
    "./Bilder/Gedanken-Screens/Screen1-Gedanke1.1.png"
  );
  thought = loadImage("./Bilder/Gedanken-Screens/Screen1-Gedanke1.2.png");
  phase2 = loadImage("./Bilder/Phase2.png");
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
  newsButton.close.mouseClicked();
  nurseButton.mouseClicked();
  thoughtsButton.mouseClicked();
}
window.mouseClicked = mouseClicked;



function show() {
  if (showStartScreen === true) {
    image(startScreen, 0, 0);
    startButton.display(startHover);
  }
  if (startButton.showIntro === true) {
    showStartScreen = false;
    // nextButton.state = "intro";
    image(intro, 0, 0);
    nextButton.display(nextHover);
  }
  if (nextButton.state === "phase1") {
    startButton.showIntro = false;
    image(phase1, 0, 0);
    nextButton.display(nextHover);
    // showPhase1 = true;
  }
  if (nextButton.state === "screen1") {
    // startButton.showIntro = false;
    nextButton.showPhase1 = false;
    image(screen1, 0, 0);

    //Gedanken Screen1
    if (time >= 300 && time < 550) {
      thoughtsButton.display(
        thoughtBubble,
        thoughtBubbleHover,
        thought,
        thoughtSpeak,
        nextButton.get()
      );
    }
    //Aktionen Screen1
    if (time >= 900 && time < 1110) {
      nurseButton.display(nurse, nurseHover, talk);
    }
    newsButton.display(news, newsHover, message1, nextButton.getState());
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
      visit,
      visit2,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1)
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
  if (skala.showScreen2 === true) {
    nextButton.state = false;
    nextButton.showScreen1 = false;
    image(screen2, 0, 0);
    // newsButton.display(news, newsHover);
    newsButton.display(news, newsHover, message1, nextButton.getState());
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
      visit,
      visit2,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1)
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
  let startLicht = false;
  if (skala.showScreen3 === true) {
    skala.showScreen2 = false;
    skala.showArray[0] = skala.showScreen2;
    image(screen3, 0, 0);
    document.getElementById("Flackern").style.display = "block";
    startLicht = true;
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
      visit,
      visit2,
      nextButton.get(),
      skala.getArray(0),
      skala.getArray(1)
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
  if (skala.showScreen4 === true) {
    skala.showScreen3 = false;
    skala.showArray[1] = skala.showScreen3;
    image(screen4, 0, 0);
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
    image(resolution4, 0, 0);
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

  if (time >= 3350) {
    nextButton.state = "phase2";
  }
  if (nextButton.state === "phase2" && nextButton.showPhase2 === true) {
    image(phase2, 0, 0);
    nextButton.display(nextHover);
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
  // if (startButton.showScreen1 === false) {
  //   if (startButton.hitTest(mouseX, mouseY)) {
  //     console.log("yeah!"); //Hovereffekt
  //     if (startButton.showScreen1 === true) {
  //       showStartScreen = false;
  //     }
  //   }
  // }
}
let telefonieren = 0;
let telefon = document.getElementById("Telefonieren");


function hideTele1() {
  telefonieren++;
  if (telefonieren > 150) {
    telefon.style.display = "none";
    telefonieren = 0;
  }

}


let telefonieren3 = 0;
let telefon3 = document.getElementById("Telefonieren");

function hideTele3() {
  telefonieren3++;
  if (telefon3 > 100) {
    telefon3.style.display = "none";
    telefonieren3 = 0;
  }
}
let telefoniern2 = 0;
let telefon2 = document.getElementById("Telefonieren");

function hideTele2() {
  telefoniern2++;
  if (telefoniern2 > 100) {
    telefon2.style.display = "none";
    telefoniern2 = 0;
  }
}

let fernseher1 = 0;
let fernseher = document.getElementById("Fernseher");

function hideTv1() {
  fernseher1++;
  if (fernseher1 > 100) {
    fernseher.style.display = "none";
    fernseher1 = 0;
  }
}

let rätsel1 = 0;
let rätseln = document.getElementById("Rätsel");

function hideRätsel1() {
  rätsel1++;
  if (rätsel1 > 110) {
    rätseln.style.display = "none";
    rätsel1 = 0;

  }
}

let buch1 = 0;
let buch = document.getElementById("Buch");

function hideBuch1() {
  buch1++;
  if (buch1 > 100) {
    buch.style.display = "none";
    buch1 = 0;
  }
}

let vogel1 = 0;
let vogel = document.getElementById("Vogel");

function hideVogel() {
  vogel1++;
  if (vogel1 > 200) {
    vogel.style.display = "none";
    vogel1 = 0;

  }
}

let sprechblasek2 = 0;
let sprechblase = document.getElementById("SprechblaseK2");

function hideSprechblaseK2() {
  sprechblasek2++;
  if (sprechblasek2 > 100) {
    sprechblase.style.display = "none";
    sprechblasek2 = 0;
  }
}

let sprechblasef1 = 0;
let Sprechblasefamilie = document.getElementById("SprechblaseK2");

function hideSprechblaseF1() {
  sprechblasef1++;
  if (sprechblasef1 > 100) {
    Sprechblasefamilie.style.display = "none";
    sprechblasef1 = 0;
  }
}

let sprechblasef2 = 0;
let Sprechblase2 = document.getElementById("SprechblaseTochter2");

function hideSprechblaseF2() {
  sprechblasef2++;
  if (sprechblasef2 > 100) {
    Sprechblase2.style.display = "none";
    sprechblasef2 = 0;


  }
}

let flackern2 = 0;
let flacker = document.getElementById("Flackern");

function hideFlackern() {
  flackern2++;
  if (flackern2 > 100) {
    flacker.style.display = "none";
    flackern2 = 0;
  }
}

let rätseln2 = 0;
let rätsel2 = document.getElementById("Rätsel");

function hideRätseln2() {
  rätsel2++;
  if (rätseln2 > 100) {
    rätsel2.style.display = "none";
    rätseln2 = 0;
  }
}
let rätseln3 = 0;
let rätsel3 = document.getElementById("RätselArm");

function hideRätseln3() {
  rätseln3++;
  if (rätseln3 > 100) {
    rätsel3.style.display = "none";
    rätsel3 = 0;
  }
}

let licht = 0;
let flackern = document.getElementById("Flackern");

function hideLicht() {
  licht++;
  if (flackern > 100) {
    licht.style.display = "none";
    flackern = 0;

  }
}

function hideWippen3() {

}

function hideWippen4() {

}



function hideWasserhahn() {

}



function draw() {
  clear();
  time = time + 5;
  show();

  if (phoneButton.startTele1) {
    hideTele1();

  }
  if (tvButton.startTv1) {
    hideTv1();
  }

  if (quiz.startRätsel) {
    hideRätsel1();
  }

  if (read.startBuch) {
    hideBuch1();
  }

  if (windowButton.startVogel) {
    hideVogel();
  }

  if (nurseButton.startSprechblaseK2) {
    hideSprechblaseK2();
  }

  if (visit.startF1) {
    hideSprechblaseF1();
  }

  if (watchTv2.startTv2) {
    hideFlackern();
  }

  if (visit2.startF2) {
    hideSprechblaseF2();
  }
  if (call2.startTele2) {
    hideTele2();
  }

  if (quiz2.startRätsel2) {
    hideRätseln2();
  }

  if (call3.startTele3) {
    hideTele3();
  }

  if (quiz3.startRätsel3) {
    hideRätseln3();
  }
  // if (showScreen3.startLicht) {
  //   hideLicht();
  // }

  // console.log(quiz.start);



  //console.log(phoneButton.start);
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
  // fill("black");
  // rect(363, 515, 36, 20);
  // rect(410, 515, 36, 20);

  //Screen3
  // image(screen3, 0, 0);
  // fill("black");
  // rect(1018, 580, 119, 28);

  //Screen4
  // image(screen4, 0, 0);
  // fill("black");
  // rect(684, 576, 119, 28);

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