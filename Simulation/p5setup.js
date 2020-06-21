let sketch = new p5();
let width = 1344;
let height = 756;

function setup() {
  let canvas = sketch.createCanvas(width, height);
  canvas.parent("p5canvas");
  sketch.frameRate(30);
}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(width, height);
}
window.addEventListener("resize", windowResized);
