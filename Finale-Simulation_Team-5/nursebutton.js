import Button from "./button.js";
export default class Nursebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.time = 0;
    this.talk = false;
    this.show = true;
    this.influence = false;
  }
  display(
    nursePhase1,
    nursePhase2,
    nurse2Phase1,
    nurse2Phase2,
    nurseHoverPhase1,
    nurseHoverPhase2,
    nurseHover2Phase1,
    nurseHover2Phase2,
    talkPhase1,
    talk2Phase1,
    talkPhase2,
    talk2Phase2,
    state,
    showScreen1,
    showScreen2
  ) {
    //Screen1 Phase1
    if (this.show === true && showScreen1 === true && state === "phase1") {
      image(nursePhase1, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(nurseHoverPhase1, 0, 0);
      }
    }
    if (this.talk === true && state === "phase1" && showScreen1 === true) {
      this.time++;
      image(talkPhase1, 0, 0);
      if (this.time % 300 === 0) {
        this.talk = false;
        this.show = false;
      }

      //Screen1 Phase2
      if (this.show === true && showScreen1 === true && state === "phase2") {
        image(nursePhase2, 0, 0);
        if (this.hitTest(mouseX, mouseY)) {
          image(nurseHoverPhase2, 0, 0);
        }
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

    //Screen2 Phase1
    if (this.show === true && state === "phase1" && showScreen2 === true) {
      image(nurse2Phase1, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(nurseHover2Phase1, 0, 0);
      }
    }
    if (this.talk === true && state === "phase1" && showScreen2 === true) {
      this.time++;
      image(talk2Phase1, 0, 0);
      if (this.time % 300 === 0) {
        this.talk = false;
        this.show = false;
      }
    }

    //Screen2 Phase2
    if (this.show === true && state === "phase2" && showScreen2 === true) {
      image(nurse2Phase2, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(nurseHover2Phase2, 0, 0);
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

  clicked() {
    this.talk = true;
    this.influence = true;
  }
}
