import Button from "./button.js";
export default class Tvbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display() {
    fill("black");
    rect(this.x, this.y, this.width, this.height);
  }

  clicked() {}
}
