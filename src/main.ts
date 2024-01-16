import { draw } from "./lifecycle/draw";
import { setup } from "./lifecycle/setup";
import "./style.css";
import p5 from "p5";

// Create a new P5.js Instance and bind it to #canvas-wrap.
new p5((p5Instance) => {
  const p = p5Instance as p5;
  setup({ p });
  draw({ p });
}, document.querySelector<HTMLDivElement>("#canvas-wrap")!);
