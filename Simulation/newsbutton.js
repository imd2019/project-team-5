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
  display(
    news,
    news4,
    newsHover,
    newsHover3,
    newsHover4,
    message1,
    message2,
    message3,
    state,
    showScreen1,
    showScreen2,
    showScreen3,
    showScreen4
  ) {
    // fill("black");
    // rect(this.x, this.y, this.width, this.height);
    // this.time++;
    // if (this.time >= 150 && this.show === true && state === "screen1") {
    if (this.show === true && showScreen4 === false) {
      image(news, 0, 0);
    }

    if (this.show === true && showScreen4 === true) {
      image(news4, 0, 0);
    }

    if (
      this.hitTest(mouseX, mouseY) &&
      this.message === false &&
      showScreen3 === false &&
      showScreen4 === false
    ) {
      image(newsHover, 0, 0);
    }

    if (this.message === true && state === "screen1") {
      image(message1, 0, 0);
    }
    if (this.message === true && state === "phase2") {
      image(message2, 0, 0);
    }
    if (this.message === true && state === "phase3") {
      image(message3, 0, 0);
    }

    if (
      this.hitTest(mouseX, mouseY) &&
      this.message === false &&
      showScreen3 === true
    ) {
      image(newsHover3, 0, 0);
    }

    if (
      this.hitTest(mouseX, mouseY) &&
      this.message === false &&
      showScreen4 === true
    ) {
      image(newsHover4, 0, 0);
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
    // }
  }

  clicked() {
    if (this.message === false) {
      this.message = true;
    }
  }
}
