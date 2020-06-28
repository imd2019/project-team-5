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
    this.optionVisit = new Button(418, 485, 36, 20);
    this.optionVisit.clicked = () => {
      if (this.phone === true) {
        this.visit = true;
      }
    };
    this.call = false;
    this.visit = false;
    this.time = 0;
  }
  display(phoneHover, phoneOptions, callHover, visitHover, call, visit, skala) {
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
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.call = false;
      }
    }
    if (this.visit === true) {
      image(visit, 0, 0);
      this.time++;
      if (this.time % 90 === 0) {
        this.phone = false;
        this.visit = false;
      }
    }
    /*neues Objekt xy als Parameter display() mitgeben, 
  dann kann man auch auf xy.clicked und co zugreifen
  innerhalb der display()-Methode*/
  }

  clicked() {
    if (this.phone === false) {
      this.phone = true;
    }
  }
}
