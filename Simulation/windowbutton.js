import Button from "./button.js";
export default class Windowbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.looking = false;
    this.time = 0;
  }
  display(windowHover, watchWindow) {
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
  }

  clicked() {
    if (this.looking === false) {
      this.looking = true;
    }
  }
}
