import Button from "./button.js";
export default class Magazinebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.magazine = false;
    this.optionRead = new Button(959, 432, 36, 20);
    this.optionQuiz = new Button(912, 432, 36, 20);
    this.read = false;
    this.quiz = false;
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
      image(read, 0, 0);
    }
    if (this.quiz === true) {
      image(quiz, 0, 0);
    }
  }

  clicked() {
    if (this.magazine === false) {
      this.magazine = true;

      if (this.optionRead.clicked() === true && this.read === false) {
        this.read = true;
      }
      if (this.optionQuiz.clicked() === true && this.quiz === false) {
        this.quiz = true;
      }
    }
  }
}
