import Button from "./button.js";
export default class Startbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.showIntro = false;
  }
  display(startHover) {
    if (this.hitTest(mouseX, mouseY)) {
      image(startHover, 0, 0);
    }
  }
  clicked() {
    this.showIntro = true;
  }
}
