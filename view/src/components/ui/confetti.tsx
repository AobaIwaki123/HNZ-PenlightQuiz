import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import CanvasConfetti, { CreateTypes, Shape } from "canvas-confetti";

interface IProps {}
export interface IConfettiFunc {
  show: () => void;
  hide: () => void;
}

const intervalTime = 400;

const Confetti = forwardRef<IConfettiFunc, IProps>((props: IProps, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let confetti: CreateTypes;

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  useEffect(() => {
    if (!confetti && canvasRef.current)
      confetti = CanvasConfetti.create(canvasRef.current, { resize: true });
  }, []);

  const show = () => {
    update();
  };

  const update = () => {
    if (!confetti) return;
    const option = {
      origin: {
        x: Math.random(),
        y: 0,
      },
      colors: ["#00f", "#0f0", "#f00"],
      shapes: ["square"] as Shape[],
      particleCount: 8,
      ticks: 800,
    };
    confetti(option);
    setTimeout(function () {
      requestAnimationFrame(update);
    }, intervalTime);
  };

  const hide = () => {
    if (confetti) confetti.reset();
  };

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />;
});
export default Confetti;
