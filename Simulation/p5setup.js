let sketch = new p5();
// let width = windowWidth;
// let height = windowHeight;

function setup() {
  let canvas = sketch.createCanvas(1920, 1080);
  canvas.parent("p5canvas");
  sketch.frameRate(30);
}
window.setup = setup;

// function windowResized() {
//   sketch.resizeCanvas(windowWidth, windowHeight);
// }
// window.addEventListener("resize", windowResized);
