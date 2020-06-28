import Button from "./button.js";
import Nextbutton from "./nextbutton.js";
export default class Windowbutton extends Nextbutton {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.looking = false;
    this.time = 0;
  }
  display(windowHover, watchWindow, watchWindow2) {
    if (this.hitTest(mouseX, mouseY)) {
      image(windowHover, 0, 0);
    }
    if (this.looking === true) {
      image(watchWindow, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.looking = false;
      }
    }
    // if (this.looking === true && this.showScreen1 === true) {
    //   image(watchWindow, 0, 0);
    //   this.time++;
    //   if (this.time % 90 === 0) {
    //     this.looking = false;
    //   }
    // }
    // if (this.looking === true && this.showScreen2 === true) {
    //   image(watchWindow2, 0, 0);
    //   this.time++;
    //   if (this.time % 90 === 0) {
    //     this.looking = false;
    //   }
    // }
  }

  clicked() {
    if (this.looking === false) {
      this.looking = true;
    }
  }
}
