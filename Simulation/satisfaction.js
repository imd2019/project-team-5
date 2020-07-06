export default class Satisfaction {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.showScreen2 = false;
    this.showScreen3 = false;
    this.showScreen4 = false;
    this.showResolution4 = false;
    this.showArray = [0, 0, 0, 0];
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
    if (this.width <= 201.5 && this.width > 133.5) {
      this.showScreen2 = true;
      this.showArray[0] = this.showScreen2;
      // console.log(this.showArray[0]);
    }

    if (this.width <= 133.5 && this.width > 64.5) {
      this.showScreen3 = true;
      this.showArray[1] = this.showScreen3;
      // console.log(this.showArray[1]);
    }

    if (this.width <= 64.5 && this.width > 1) {
      this.showScreen4 = true;
      this.showArray[2] = this.showScreen4;
    }

    if (this.width <= 1) {
      this.showResolution4 = true;
      // this.showArray.push(this.showResolution4);
      this.showArray[3] = this.showResolution4;
    }

    // fillArray();
  }
  // fillArray() {
  //   this.showArray.push(this.showScreen2);
  //   this.showArray.push(this.showScreen3);
  //   this.showArray.push(this.showScreen4);
  //   this.showArray.push(this.showResolution4);
  // }
  getArray(x) {
    return this.showArray[x];
  }
}
