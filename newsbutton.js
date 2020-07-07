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
    this.close4 = new Button(1120, 28, 10, 10);
    this.close4.clicked = () => {
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
    message3Screen4,
    state,
    showScreen1,
    showScreen2,
    showScreen3,
    showScreen4
  ) {
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

    if (this.message === true && state === "phase1") {
      image(message1, 0, 0);
    }
    if (this.message === true && state === "phase2") {
      image(message2, 0, 0);
    }
    if (this.message === true && state === "phase3" && showScreen4 === false) {
      image(message3, 0, 0);
    }
    if (this.message === true && state === "phase3" && showScreen4 === true) {
      image(message3Screen4, 0, 0);
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
  }

  clicked() {
    if (this.message === false) {
      this.message = true;
    }
  }
}
