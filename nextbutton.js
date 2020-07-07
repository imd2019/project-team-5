import Button from "./button.js";
// import Startbutton from "./startbutton.js";
export default class Nextbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    // this.startButton.showIntro = true;
    // this.showPhase1 = false;
    this.showScreen1 = false;
    this.showPhase2 = true;
    this.state = "intro";
    // this.nextButton2 = new Button(992, 637, 292, 58);
    // this.nextButton2.clicked = () => {
    //   this.showPhase1 = false;
    //   this.showScreen1 = true;
    // };
  }
  display(nextHover, screen1) {
    // fill("white");
    // rect(this.x, this.y, this.width, this.height);
    if (this.hitTest(mouseX, mouseY)) {
      image(nextHover, 0, 0);
    }
    // if (this.nextButton2.hitTest(mouseX, mouseY)) {
    //   image(nextHover, 0, 0);
    // }
    // if (this.showScreen1 === true && this.showPhase1 === false) {
    //   image(screen1, 0, 0);
    // }
  }
  get() {
    return this.showScreen1;
  }
  getState() {
    return this.state;
  }
  // get(x) {
  //   return showScreen[x];
  // }
  clicked() {
    if (this.state === "intro") {
      this.state = "phase1";
    } else if (this.state === "phase1") {
      this.state = "screen1";
    } else if (this.state === "phase2") {
      //this.state = "phase3";
      this.showPhase2 = false;
    }
    console.log(this.state);
    // if (this.startButton.showIntro === true) {
    //   this.showPhase1 = true;
    // }
    // if (this.showPhase1 === true) {
    //   this.showPhase1 = false;
    //   this.showScreen1 = true;
    // }
    this.showScreen1 = true;
    // this.showPhase1 = true;
  }
}
