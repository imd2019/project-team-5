export default class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {}
  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true; //ersetzt hitTest=true;
    } else {
      return false; //return beendet automatisch die Funktion
    }
  }
  clicked() {}
  mouseClicked() {
    if (this.hitTest(mouseX, mouseY) === true) {
      this.clicked();
    }
  }
}
