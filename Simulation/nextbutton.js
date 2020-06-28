import Button from "./button.js";
// import Startbutton from "./startbutton.js";
export default class Nextbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    // this.startButton.showIntro = true;
    this.showPhase1 = false;
    this.showScreen1 = false;
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
  clicked() {
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
