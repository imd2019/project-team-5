import Button from "./button.js";
export default class Phonebutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.phone = false;
    this.optionCall = new Button(418, 485, 36, 20);
    this.optionVisit = new Button(377, 485, 36, 20);
    this.call = false;
    this.visit = false;
  }
  display(phoneHover, phoneOptions, callHover, visitHover, call, visit) {
    if (this.hitTest(mouseX, mouseY)) {
      image(phoneHover, 0, 0);
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
    if (this.call === true) {
      image(call, 0, 0);
    }
    if (this.visit === true) {
      image(visit, 0, 0);
    }
    /*neues Objekt xy als Parameter display() mitgeben, 
  dann kann man auch auf xy.clicked und co zugreifen
  innerhalb der display()-Methode*/
  }

  clicked() {
    if (this.phone === false) {
      this.phone = true;

      if (this.optionCall.clicked() === true && this.call === false) {
        console.log("hey");
        this.call = true;
      }
      if (this.optionVisit.clicked() === true && this.visit === false) {
        this.visit = true;
      }
    }
  }
}
