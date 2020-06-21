export default class Satisfaction {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    noStroke();
    fill("#c2c2c2");
    rect(this.x, this.y, this.width, this.height);
  }
  decrease() {
    if (this.width >= 0) {
      this.width = this.width - 1;
    }
  }
}
