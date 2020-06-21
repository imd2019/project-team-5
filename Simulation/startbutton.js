import Button from "./button.js";
export default class Startbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.showScreen1 = false;
  }
  display() {
    fill("black");
    push();
    translate(this.x + 824, this.y + 496);
    rotate(0.05);
    rect(0, 0, this.width + 339, this.height + 72);
    pop();
  }
  clicked() {
    this.showScreen1 = true;
  }
}
