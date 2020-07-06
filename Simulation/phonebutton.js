import Button from "./button.js";
export default class Phonebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.phone = false;
    this.startTele1 = false;
    this.startF1 = false;
    this.startF2 = false;
    this.startT2 = false;
    this.startT3 = false;


    this.optionCall = new Button(377, 485, 36, 20);
    //bei der arrow-function hatten wir Hilfe von Max
    this.optionCall.clicked = () => {
      if (this.phone === true) {
        this.call = true;
        document.getElementById("Telefonieren").style.display = "block";
        this.startTele1 = true;

        // console.log(this.start);
      }
    };
    this.optionCall2 = new Button(366, 375, 36, 20);
    this.optionCall2.clicked = () => {
      if (this.phone === true) {
        this.call = true;
        document.getElementById("Telefonieren").style.display = "block";
        this.startT2 = true;
      }
    };
    this.optionVisit = new Button(418, 485, 36, 20);
    this.optionVisit.clicked = () => {
      if (this.phone === true) {
        this.visit = true;
        document.getElementById("SprechblaseTochter2").style.display = "block";
        startF1 = true;
      }
    };
    this.optionVisit2 = new Button(407, 375, 36, 20);
    this.optionVisit2.clicked = () => {
      if (this.phone === true) {
        this.visit = true;
        document.getElementById("SprechblaseK2").style.display = "block";
        this.startF2 = true;
      }
    };
    this.call = false;
    this.visit = false;
    this.time = 0;
  }
  display(
    phoneHover,
    phoneHover2,
    phoneHover3,
    phoneOptions,
    phoneOptions2,
    callHover,
    callHover2,
    visitHover,
    visitHover2,
    call,
    call2,
    call3,
    visit,
    visit2,
    showScreen1,
    showScreen2,
    showScreen3
  ) {
    if (this.hitTest(mouseX, mouseY) && showScreen1 === true) {
      image(phoneHover, 0, 0);
    }
    if (this.hitTest(mouseX, mouseY) && showScreen2 === true) {
      image(phoneHover2, 0, 0);
    }
    if (this.hitTest(mouseX, mouseY) && showScreen3 === true) {
      image(phoneHover3, 0, 0);
    }
    if (this.phone === true) {
      image(phoneOptions, 0, 0);
      if (this.optionCall.hitTest(mouseX, mouseY)) {
        image(callHover, 0, 0);

      }

      if (this.optionVisit.hitTest(mouseX, mouseY)) {
        image(visitHover, 0, 0);
      }
    }
    if (this.phone === true && showScreen2 === true) {
      image(phoneOptions2, 0, 0);
      if (this.optionCall2.hitTest(mouseX, mouseY)) {
        image(callHover2, 0, 0);
      }
      if (this.optionVisit2.hitTest(mouseX, mouseY)) {
        image(visitHover2, 0, 0);
      }
    }

    if (this.call === true && showScreen1 === true) {
      image(call, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.call = false;
      }
    }
    if (this.call === true && showScreen2 === true) {
      image(call2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.call = false;
      }
    }
    if (this.visit === true && showScreen1 === true) {
      image(visit, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    if (this.visit === true && showScreen2 === true) {
      image(visit2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    if (this.phone === true && showScreen3 === true) {
      image(call3, 0, 0);
      document.getElementById("Telefonieren").style.display = "block";
      this.startT3 = true;
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
      }
    }
  }

  clicked() {
    if (this.phone === false) {
      this.phone = true;
    }
  }
}