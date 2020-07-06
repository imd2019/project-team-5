import Button from "./button.js";
export default class Newsbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.time = 0;
    this.message = false;
    this.show = true;
    this.close = new Button(1305, 30, 10, 10);
    this.close.clicked = () => {
      if (this.message === true) {
        this.message = false;
        this.show = false;
      }
    };
  }
  display(news, newsHover, message1, state) {
    // fill("black");
    // rect(this.x, this.y, this.width, this.height);
    this.time++;
    if (this.time >= 150 && this.show === true && state === "screen1") {
      image(news, 0, 0);

      if (this.hitTest(mouseX, mouseY) && this.message === false) {
        image(newsHover, 0, 0);

      }
      if (this.message === true) {
        image(message1, 0, 0);
      }
      // if (
      //   this.message === true &&
      //   mouseX > 1305 &&
      //   mouseY > 30 &&
      //   mouseX < 1315 &&
      //   mouseY < 40
      // ) {
      //   this.message = false;
      // }
    }
  }

  clicked() {
    if (this.message === false) {
      this.message = true;
    }
  }
}