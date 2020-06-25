import Button from "./button.js";
export default class Tvbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.watching = false;
    this.time = 0;
  }
  display(tvHover, watchTv) {
    if (this.hitTest(mouseX, mouseY)) {
      image(tvHover, 0, 0);
    }
    if (this.watching === true) {
      image(watchTv, 0, 0);
      this.time++;
      if (this.time % 300 === 0) {
        this.watching = false;
      }
    }
  }

  clicked() {
    if (this.watching === false) {
      this.watching = true;
      this.time = 0;
    }
    // if (this.watching === true) {
    //   this.watching = false;
    // }
  }
}
