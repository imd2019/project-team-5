import Button from "./button.js";
export default class Nursebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.time = 0;
    this.talk = false;
    this.show = true;
    this.action = false;
  }
  display(
    nurse,
    nurse2,
    nurseHover,
    nurseHover2,
    talkPhase1,
    talk2Phase1,
    talkPhase2,
    talk2Phase2,
    state,
    showScreen1,
    showScreen2
  ) {
    // this.time++;
    // if (this.time >= 900 && this.time < 1110) {
    // this.show = true;

    //Screen1
    if (this.show === true && showScreen1 === true) {
      image(nurse, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(nurseHover, 0, 0);
      }
    }
    if (this.talk === true && state === "screen1" && showScreen1 === true) {
      this.time++;
      image(talkPhase1, 0, 0);
      if (this.time % 300 === 0) {
        this.talk = false;
        this.show = false;
      }

      if (this.talk === true && state === "phase2" && showScreen1 === true) {
        this.time++;
        image(talkPhase2, 0, 0);
        if (this.time % 300 === 0) {
          this.talk = false;
          this.show = false;
        }
      }
      if (this.talk === true && state === "phase3" && showScreen1 === true) {
        this.time++;
        image(talkPhase2, 0, 0);
        if (this.time % 300 === 0) {
          this.talk = false;
          this.show = false;
        }
      }
    }

    //Screen2
    if (this.show === true && showScreen2 === true) {
      console.log("hey");
      image(nurse2, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(nurseHover2, 0, 0);
      }
    }
    if (this.talk === true && state === "screen1" && showScreen2 === true) {
      this.time++;
      image(talk2Phase1, 0, 0);
      if (this.time % 300 === 0) {
        this.talk = false;
        this.show = false;
      }
    }

    if (this.talk === true && state === "phase2" && showScreen2 === true) {
      this.time++;
      image(talk2Phase2, 0, 0);
      if (this.time % 300 === 0) {
        this.talk = false;
        this.show = false;
      }
    }
    if (this.talk === true && state === "phase3" && showScreen2 === true) {
      this.time++;
      image(talk2Phase2, 0, 0);
      if (this.time % 300 === 0) {
        this.talk = false;
        this.show = false;
      }
    }
  }
  //   if (this.time >= 1110) {
  //     this.show = false;
  //   }
  // }
  clicked() {
    this.talk = true;
    this.action = true;
  }
}
