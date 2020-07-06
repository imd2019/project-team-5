import Button from "./button.js";
export default class Magazinebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.magazine = false;
    this.startRätsel = false;
    this.startBuch = false;
    this.startRätsel2 = false;
    this.startBuch2 = false;
    this.startRätsel3 = false;
    //this.time = true;
    this.optionRead = new Button(912, 432, 36, 20);
    this.optionRead.clicked = () => {
      if ((this.magazine = true)) {
        document.getElementById("Buch").style.display = "block";
        this.startBuch = true;
        this.read = true;
      }
    };
    this.optionRead2 = new Button(363, 515, 36, 20);
    this.optionRead2.clicked = () => {
      if ((this.magazine = true)) {
        this.read = true;
        document.getElementById("Buch").style.display = "block";
        this.startBuch2 = true;
        this.time = false;

      }
    };
    this.optionQuiz = new Button(959, 432, 36, 20);
    this.optionQuiz.clicked = () => {
      if ((this.magazine = true)) {
        this.quiz = true;

      }
    };
    this.optionQuiz2 = new Button(410, 515, 36, 20);
    this.optionQuiz2.clicked = () => {
      if ((this.magazine = true)) {
        this.quiz = true;
        document.getElementById("Rätsel").style.display = "block";
        this.startRätsel2 = true;

      }
    };
    this.read = false;
    this.quiz = false;
    this.time = 0;
  }
  display(
    magazineHover,
    magazineHover2,
    magazineHover3,
    magazineHover4,
    magazineOptions,
    magazineOptions2,
    readHover,
    readHover2,
    quizHover,
    quizHover2,
    read,
    read2,
    quiz,
    quiz2,
    quiz3,
    quiz4,
    showScreen1,
    showScreen2,
    showScreen3,
    showScreen4
  ) {
    if (this.hitTest(mouseX, mouseY) && showScreen1 === true) {
      image(magazineHover, 0, 0);
    }
    if (this.hitTest(mouseX, mouseY) && showScreen2 === true) {
      image(magazineHover2, 0, 0);
    }
    if (this.hitTest(mouseX, mouseY) && showScreen3 === true) {
      image(magazineHover3, 0, 0);
    }
    if (this.hitTest(mouseX, mouseY) && showScreen4 === true) {
      image(magazineHover4, 0, 0);
    }
    if (this.magazine === true && showScreen1 === true) {
      image(magazineOptions, 0, 0);
      if (this.optionRead.hitTest(mouseX, mouseY)) {
        image(readHover, 0, 0);

      }
      if (this.optionQuiz.hitTest(mouseX, mouseY)) {
        image(quizHover, 0, 0);
        document.getElementById("Rätsel").style.display = "block";
        this.startRätsel = true;
      }
    }
    if (this.magazine === true && showScreen2 === true) {
      image(magazineOptions2, 0, 0);
      if (this.optionRead2.hitTest(mouseX, mouseY)) {
        image(readHover2, 0, 0);
      }
      if (this.optionQuiz2.hitTest(mouseX, mouseY)) {
        image(quizHover2, 0, 0);
      }
    }
    if (this.read === true && showScreen1 === true) {
      this.time++;
      image(read, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
        this.read = false;
      }
    }
    if (this.read === true && showScreen2 === true) {
      this.time++;
      image(read2, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
        this.read = false;
      }
    }
    if (this.quiz === true && showScreen1 === true) {
      this.time++;
      image(quiz, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
        this.quiz = false;
      }
    }
    if (this.quiz === true && showScreen2 === true) {
      this.time++;
      image(quiz2, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
        this.quiz = false;
      }
    }
    if (this.magazine === true && showScreen3 === true) {
      image(quiz3, 0, 0);
      document.getElementById("RätselArm").style.display = "block";
      this.startRätsel3 = true;

    }
    if (this.magazine === true && showScreen3 === true) {
      this.time++;
      // image(quiz3, 0, 0);
      // document.getElementById("RätselArm").style.display = "block";
      // this.startRätsel3 = true;
      if (this.time % 90 === 0) {
        this.magazine = false;
      }
    }
    // if (this.magazine === true && showScreen3 === true) {
    //   image(quiz3, 0, 0);
    //   document.getElementById("RätselArm").style.display = "block";
    //   this.startRätsel3 = true;
    // }


    if (this.magazine === true && showScreen4 === true) {
      console.log(showScreen4);
      this.time++;
      image(quiz4, 0, 0);
      if (this.time % 90 === 0) {
        this.magazine = false;
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