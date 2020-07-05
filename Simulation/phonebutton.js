import Button from "./button.js";
export default class Phonebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.phone = false;
    this.optionCall = new Button(377, 485, 36, 20);
    //bei der arrow-function hatten wir Hilfe von Max
    this.optionCall.clicked = () => {
      if (this.phone === true) {
        this.call = true;
      }
    };
    this.optionCall2 = new Button(366, 375, 36, 20);
    this.optionCall2.clicked = () => {
      if (this.phone === true) {
        this.call = true;
      }
    };
    this.optionVisit = new Button(418, 485, 36, 20);
    this.optionVisit.clicked = () => {
      if (this.phone === true) {
        this.visit = true;
      }
    };
    this.optionVisit2 = new Button(407, 375, 36, 20);
    this.optionVisit2.clicked = () => {
      if (this.phone === true) {
        this.visit = true;
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
    visitPhase1,
    visitPhase2,
    visit2Phase1,
    visit2Phase2,
    showScreen1,
    showScreen2,
    showScreen3,
    state
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
    if (this.phone === true && showScreen1 === true && state !== "phase3") {
      image(phoneOptions, 0, 0);
      if (this.optionCall.hitTest(mouseX, mouseY)) {
        image(callHover, 0, 0);
      }
      if (this.optionVisit.hitTest(mouseX, mouseY)) {
        image(visitHover, 0, 0);
      }
    }
    if (this.phone === true && showScreen2 === true && state !== "phase3") {
      image(phoneOptions2, 0, 0);
      if (this.optionCall2.hitTest(mouseX, mouseY)) {
        image(callHover2, 0, 0);
      }
      if (this.optionVisit2.hitTest(mouseX, mouseY)) {
        image(visitHover2, 0, 0);
      }
    }

    if (this.call === true && showScreen1 === true && state !== "phase3") {
      image(call, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.call = false;
      }
    }
    if (this.phone === true && showScreen1 === true && state === "phase3") {
      image(call, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
      }
    }
    if (this.call === true && showScreen2 === true && state !== "phase3") {
      image(call2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.call = false;
      }
    }
    if (this.phone === true && showScreen2 === true && state === "phase3") {
      image(call2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
      }
    }
    if (this.visit === true && showScreen1 === true && state === "screen1") {
      image(visitPhase1, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    if (this.visit === true && showScreen1 === true && state === "phase2") {
      image(visitPhase2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    if (this.visit === true && showScreen2 === true && state === "screen1") {
      image(visit2Phase1, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    if (this.visit === true && showScreen2 === true && state === "phase2") {
      image(visit2Phase2, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    if (this.phone === true && showScreen3 === true) {
      image(call3, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
      }
    }
  }

  clicked() {
    if (this.phone === false) {
      this.phone = true;
      // console.log(this.phone);
    }
  }
}
