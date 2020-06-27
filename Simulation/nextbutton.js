// import Button from "./button.js";
import Startbutton from "./startbutton.js";
export default class Nextbutton extends Startbutton {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    // this.startButton.showIntro = true;
    this.showPhase1 = false;
    this.showScreen1 = false;
  }
  display(nextHover) {
    // fill("white");
    // rect(this.x, this.y, this.width, this.height);
    if (this.hitTest(mouseX, mouseY)) {
      image(nextHover, 0, 0);
    }
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
  }
}
