import p5 from "p5";

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

type setupArgs = {
  p: p5;
};

export function setup({ p }: setupArgs) {
  p.setup = () => {
    p.createCanvas(500, 500);
    sampleContent(p);
  };
}
