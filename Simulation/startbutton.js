import Button from "./button.js";
export default class Startbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.showScreen1 = false;
  }
  display() {
    fill("black");
    push();
    translate(this.x, this.y);
    rotate(0.05);
    rect(0, 0, this.width, this.height);
    pop();
  }
  clicked() {
    this.showScreen1 = true;
  }
}
