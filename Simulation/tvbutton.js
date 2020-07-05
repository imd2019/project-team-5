import Button from "./button.js";
export default class Tvbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.watching = false;
    this.time = 0;
  }
  display(tvHover, tvHover2, watchTv, watchTv2, showScreen1, showScreen2) {
    if (this.hitTest(mouseX, mouseY) && showScreen1 === true) {
      image(tvHover, 0, 0);
    }
    if (this.hitTest(mouseX, mouseY) && showScreen2 === true) {
      image(tvHover2, 0, 0);
    }

    if (this.watching === true && showScreen1 === true) {
      image(watchTv, 0, 0);
      this.time++;
      if (this.time % 300 === 0) {
        this.watching = false;
        setWidth(2);
      }
    }
    if (this.watching === true && showScreen2 === true) {
      image(watchTv2, 0, 0);
      this.time++;
      if (this.time % 300 === 0) {
        this.watching = false;
      }
    }
  }
  setWidth(x) {
    this.width = this.width + x;
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
