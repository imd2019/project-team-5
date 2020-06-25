import Button from "./button.js";
export default class Magazinebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display(magazineHover) {
    if (this.hitTest(mouseX, mouseY)) {
      image(magazineHover, 0, 0);
    }
  }

  clicked() {}
}
