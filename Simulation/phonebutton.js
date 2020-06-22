import Button from "./button.js";
export default class Phonebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    // this.showScreen1 = false;
  }
  display() {
    fill("black");
    rect(this.x, this.y, this.width, this.height);
  }
  // hitTest() {
  //   if (mouseX > 394 && mouseY > 510 && mouseX < 432 && mouseY < 545) {
  //     image(phoneHover, 0, 0);
  //   }
  // }
  clicked() {
    // this.showScreen1 = true;
  }
}
