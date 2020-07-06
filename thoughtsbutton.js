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
    thoughtBubbleHover,
    thought,
    thoughtSpeak,
    showScreen1
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
  }
  //   if (this.time >= 1110) {
  //     this.show = false;
  //   }
  // }
  clicked() {
    this.think = true;
  }
}
