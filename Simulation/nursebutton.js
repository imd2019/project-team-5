import Button from "./button.js";
export default class Nursebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.time = 0;
    this.talk = false;
    this.show = false;
    this.startSprechblaseK2 = false;
  }
  display(nurse, nurseHover, talk) {
    // this.time++;
    // if (this.time >= 900 && this.time < 1110) {
    this.show = true;
    if (this.show === true) {
      image(nurse, 0, 0);
      if (this.hitTest(mouseX, mouseY)) {
        image(nurseHover, 0, 0);

      }
      if (this.talk === true) {

        this.time++;
        image(talk, 0, 0);
        document.getElementById("SprechblaseK2").style.display = "block";
        this.startSprechblaseK2 = true;
        console.log(this.time);
        console.log(this.time);



        if (this.time % 300 === 0) {
          this.talk = false;
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
    this.talk = true;
  }
}