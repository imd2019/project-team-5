import Button from "./button.js";
export default class Magazinebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.magazine = false;
    this.optionRead = new Button(912, 432, 36, 20);
    this.optionRead.clicked = () => {
      if ((this.magazine = true)) {
        this.read = true;
      }
    };
    this.optionQuiz = new Button(959, 432, 36, 20);
    this.optionQuiz.clicked = () => {
      if ((this.magazine = true)) {
        this.quiz = true;
      }
    };
    this.read = false;
    this.quiz = false;
    this.time = 0;
  }
  display(magazineHover, magazineOptions, readHover, quizHover, read, quiz) {
    if (this.hitTest(mouseX, mouseY)) {
      image(magazineHover, 0, 0);
    }
    if (this.magazine === true) {
      image(magazineOptions, 0, 0);
      if (this.optionRead.hitTest(mouseX, mouseY)) {
        image(readHover, 0, 0);
      }
      if (this.optionQuiz.hitTest(mouseX, mouseY)) {
        image(quizHover, 0, 0);
      }
    }
    if (this.read === true) {
      this.time++;
      image(read, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
        this.read = false;
      }
    }
    if (this.quiz === true) {
      this.time++;
      image(quiz, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
        this.quiz = false;
      }
    }
  }

  clicked() {
    if (this.magazine === false) {
      this.magazine = true;

      // if (this.optionRead.clicked() === true && this.read === false) {
      //   this.read = true;
      // }
      // if (this.optionQuiz.clicked() === true && this.quiz === false) {
      //   this.quiz = true;
      // }
    }
  }
}
