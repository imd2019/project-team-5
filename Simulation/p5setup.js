let sketch = new p5();
let width = 1344;
let height = 756;

// let startScreen;
// let screen1;
// let satisfactionBanner;
// let startHover;
// let nextHover;
// let news;
// let phoneHover;
// let tvHover;
// let magazineHover;
// let windowHover;
// let newsHover;
// let intro;
// let watchTv;
// let watchWindow;
// let phoneOptions;
// let callHover;
// let visitHover;
// let call;
// let visit;
// let magazineOptions;
// let readHover;
// let quizHover;
// let read;
// let quiz;

// function preload() {
//   startScreen = loadImage("Start-Screen.png");
//   screen1 = loadImage("Screen1.png");
//   satisfactionBanner = loadImage("Skala1-2.png");
//   startHover = loadImage("Start-Screen-Hover.png");
//   nextHover = loadImage("Weiter-hover.png");
//   news = loadImage("News(Screen1-2-3).png");
//   phoneHover = loadImage("Screen1-Telefon.png");
//   tvHover = loadImage("Screen1-Fernseher.png");
//   magazineHover = loadImage("Screen1-Schublade.png");
//   windowHover = loadImage("Screen1-Fenster.png");
//   newsHover = loadImage("News-Hover(Screen1-2).png");
//   intro = loadImage("Einleitung.png");
//   watchTv = loadImage("Screen1-Tv-schauen.png");
//   watchWindow = loadImage("Screen1-Fenster-schauen.png");
//   phoneOptions = loadImage("Screen1-Telefon2.png");
//   callHover = loadImage("Screen1-Telefon4.png");
//   visitHover = loadImage("Screen1-Telefon3.png");
//   call = loadImage("Screen1-telefoniert.png");
//   visit = loadImage("Screen1-Familie.png");
//   magazineOptions = loadImage("Screen1-Schublade2.png");
//   readHover = loadImage("Screen1-Schublade4.png");
//   quizHover = loadImage("Screen1-Schublade3.png");
//   read = loadImage("Screen1-lesen.png");
//   quiz = loadImage("Screen1-rätseln.png");
// }
// window.preload = preload;

function setup() {
  let canvas = sketch.createCanvas(width, height);
  canvas.parent("p5canvas");
  sketch.frameRate(30);

  // startScreen.loadPixels();
  // screen1.loadPixels();
  // satisfactionBanner.loadPixels();
  // startHover.loadPixels();
  // nextHover.loadPixels();
  // news.loadPixels();
  // phoneHover.loadPixels();
  // tvHover.loadPixels();
  // magazineHover.loadPixels();
  // windowHover.loadPixels();
  // newsHover.loadPixels();
  // intro.loadPixels();
  // watchTv.loadPixels();
  // watchWindow.loadPixels();
  // phoneOptions.loadPixels();
  // callHover.loadPixels();
  // visitHover.loadPixels();
  // call.loadPixels();
  // visit.loadPixels();
  // magazineOptions.loadPixels();
  // readHover.loadPixels();
  // quizHover.loadPixels();
  // read.loadPixels();
  // quiz.loadPixels();
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(width, height);
}
window.addEventListener("resize", windowResized);
