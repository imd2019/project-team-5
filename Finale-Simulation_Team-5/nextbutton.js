import Button from "./button.js";
export default class Nextbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.showScreen1 = false;
    this.showPhase2 = true;
    this.showPhase3 = true;
    this.showEnd1 = true;
    this.showEnd23 = true;
    this.showEnd4 = true;
    this.showResolution = false;
    this.showTips = false;
    this.showRestart = false;
    this.timeStop = false;
    this.state = "intro";
  }
  display(nextHover, explanationHover) {
    if (
      (this.hitTest(mouseX, mouseY) && this.showResolution === false) ||
      (this.hitTest(mouseX, mouseY) && this.showTips === false)
    ) {
      image(nextHover, 0, 0);
    }
    if (this.showResolution === true && this.hitTest(mouseX, mouseY)) {
      image(explanationHover, 0, 0);
    }
  }
  get() {
    return this.showScreen1;
  }
  getState() {
    return this.state;
  }

  clicked() {
    if (this.state === "intro") {
      this.state = "showPhase1";
    } else if (this.state === "showPhase1") {
      this.state = "phase1";
      this.showScreen1 = true;
    } else if (this.state === "phase2") {
      this.timeStop = false;
      this.showPhase2 = false;
    } else if (this.state === "phase3") {
      this.timeStop = false;
      this.showPhase3 = false;
    } else if (this.state === "end1") {
      this.timeStop = false;
      this.showEnd1 = false;
      this.showResolution = true;
      this.state = "resolution";
    } else if (this.state === "end23") {
      this.timeStop = false;
      this.showEnd23 = false;
      this.showResolution = true;
      this.state = "resolution";
    } else if (this.state === "end4") {
      this.timeStop = false;
      this.showEnd4 = false;
      this.showResolution = true;
      this.state = "resolution";
    } else if (this.state === "resolution") {
      this.showResolution = false;
      this.showRestart = true;
      this.state = "tips";
      this.showTips = true;
    }
  }
}
