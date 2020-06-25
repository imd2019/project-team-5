import Button from "./button.js";
export default class Newsbutton extends Button {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
  display(news, newsHover) {
    // fill("black");
    // rect(this.x, this.y, this.width, this.height);
    image(news, 0, 0);
    if (this.hitTest(mouseX, mouseY)) {
      image(newsHover, 0, 0);
    }
  }

  clicked() {}
}
