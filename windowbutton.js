// import Button from "./button.js";
import Nextbutton from "./nextbutton.js";
export default class Windowbutton extends Nextbutton {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.looking = false;
    this.time = 0;
    this.startVogel = false;
  }


  display(windowHover, watchWindow, watchWindow2, showScreen1, showScreen2) {
    // document.getElementById("Vogel").style.display = "block";
    // this.startVogel = true;
    if (this.hitTest(mouseX, mouseY)) {
      image(windowHover, 0, 0);
      // document.getElementById("Vogel").style.display = "block";
      // this.startVogel = true;
    }

    if (this.looking === true && showScreen1 === true) {
      image(watchWindow, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.looking = false;
      }
    }
    if (this.looking === true && showScreen2 === true) {
      image(watchWindow2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.looking = false;
      }
    }
  }

  clicked() {
    if (this.looking === false) {
      this.looking = true;
    }
  }
}