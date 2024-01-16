import p5 from "p5";
import { lerpWithSin } from "../utils/lerp-with-sin";

function sampleContent(p: p5) {
  p.background(lerpWithSin({ p, minValue: 0, maxValue: 255 }));
  p.textSize(lerpWithSin({ p, minValue: 16, maxValue: 18 }));
  p.translate(p.width / 2, p.height / 2);
  p.rotate(lerpWithSin({ p, minValue: -0.1, maxValue: 0.1 }));
  p.translate(-p.width / 2, -p.height / 2);
  p.fill(lerpWithSin({ p, minValue: 255, maxValue: 0 }));
  p.textAlign(p.CENTER, p.CENTER);
  p.textFont("monospace");
  p.text("Pretty p5 + TypeScript", p.width / 2, p.height / 2);
}

type drawArgs = {
  p: p5;
};

export function draw({ p }: drawArgs) {
  p.draw = () => {
    p.createCanvas(500, 500);
    sampleContent(p);
  };
}
