import "./style.css";
import p5 from "p5";

// Feel free to delete this function.
// It just draws some text in the center of the canvas, as a greeting!
function sampleContent(p: p5) {
  // Set background to black
  p.background(0);
  // Write some text in the center of the canvas
  p.textSize(16);
  p.fill(255);
  p.textAlign(p.CENTER, p.CENTER);
  p.textFont("monospace");
  p.text("Pretty p5 + TypeScript", p.width / 2, p.height / 2);
}

// Create a new P5.js Instance and bind it to #canvas-wrap.
new p5((p5Instance) => {
  const p = p5Instance as p5;
  p.setup = () => {
    p.createCanvas(500, 500);
    sampleContent(p);
  };
}, document.querySelector<HTMLDivElement>("#canvas-wrap")!);
