import Button from "./button.js";
export default class Thoughtsbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.time = 0;
    this.think = false;
    this.show = false;
  }
  display(
    thoughtBubble,
    thoughtBubble2,
    thoughtBubble3,
    thoughtBubble4,
    thoughtBubbleHover,
    thoughtBubbleHover2,
    thoughtBubbleHover3,
    thoughtBubbleHover4,
    thought,
    thought2,
    thought3,
    thought4,
    thoughtSpeak,
    showScreen1,
    showScreen2,
    showScreen3,
    showScreen4
  ) {
    // this.time++;
    // if (this.time >= 900 && this.time < 1110) {
    this.show = true;
    if (this.show === true && showScreen1 === true) {
      image(thoughtBubble, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(thoughtBubbleHover, 0, 0);
      }
      if (this.think === true && showScreen1 === true) {
        this.time++;
        image(thought, 0, 0);
        // let thoughtSpeak;
        // thoughtSpeak.play();
        if (this.time % 300 === 0) {
          this.think = false;
          this.show = false;
        }
      }
    }
    if (this.show === true && showScreen2 === true) {
      image(thoughtBubble2, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(thoughtBubbleHover2, 0, 0);
      }
      if (this.think === true && showScreen2 === true) {
        this.time++;
        image(thought2, 0, 0);
        // let thoughtSpeak;
        // thoughtSpeak.play();
        if (this.time % 300 === 0) {
          this.think = false;
          this.show = false;
        }
      }
    }
    if (this.show === true && showScreen3 === true) {
      image(thoughtBubble3, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(thoughtBubbleHover3, 0, 0);
      }
      if (this.think === true && showScreen3 === true) {
        this.time++;
        image(thought3, 0, 0);
        // let thoughtSpeak;
        // thoughtSpeak.play();
        if (this.time % 300 === 0) {
          this.think = false;
          this.show = false;
        }
      }
    }
    if (this.show === true && showScreen4 === true) {
      image(thoughtBubble4, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(thoughtBubbleHover4, 0, 0);
      }
      if (this.think === true && showScreen4 === true) {
        this.time++;
        image(thought4, 0, 0);
        // let thoughtSpeak;
        // thoughtSpeak.play();
        if (this.time % 300 === 0) {
          this.think = false;
          this.show = false;
        }
      }
    }
  }
  //   if (this.time >= 1110) {
  //     this.show = false;
  //   }
  // }
  clicked() {
    this.think = true;
  }
}
