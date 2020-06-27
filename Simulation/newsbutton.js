import Button from "./button.js";
export default class Newsbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.time = 0;
    this.message = false;
  }
  display(news, newsHover, message1) {
    // fill("black");
    // rect(this.x, this.y, this.width, this.height);
    this.time++;
    if (this.time >= 150) {
      image(news, 0, 0);
      if (this.hitTest(mouseX, mouseY) && this.message === false) {
        image(newsHover, 0, 0);
      }
      if (this.message === true) {
        image(message1, 0, 0);
      }
      if (
        this.message === true &&
        mouseX > 1305 &&
        mouseY > 30 &&
        mouseX < 1315 &&
        mouseY < 40
      ) {
        this.message = false;
      }
    }
  }

  clicked() {
    if (this.message === false) {
      this.message = true;
    }
  }
}
