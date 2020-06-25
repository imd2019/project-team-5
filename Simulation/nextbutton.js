import Button from "./button.js";
export default class Nextbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
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
    this.showScreen1 = true;
  }
}
