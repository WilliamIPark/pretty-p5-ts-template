import p5 from "p5";

type LerpWithSinArgs = {
  p: p5;
  minValue: number;
  maxValue: number;
};

export function lerpWithSin({ p, minValue, maxValue }: LerpWithSinArgs) {
  const phase = (1 + p.sin(p.frameCount / 100)) / 2;
  const value = p.lerp(minValue, maxValue, phase);
  return value;
}
