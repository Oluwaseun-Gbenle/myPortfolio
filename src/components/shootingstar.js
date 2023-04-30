import React, { useEffect, useRef } from 'react'
import "./style.css";

const ShootingStar = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let lines = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initLines();
    };

    const initLines = () => {
      lines = [];
      const numLines = 50;
      const lineHeight = canvas.height / numLines;
      const lineWidth = 2;

      for (let i = 0; i < numLines; i++) {
        const y = canvas.height - i * lineHeight;
        const x = Math.random() * canvas.width;
        lines.push({ x, y, width: lineWidth, height: lineHeight });
      }
    };

    const update = () => {
      lines.forEach((line) => {
        line.y -= 1;
        if (line.y < -line.height) {
          line.y = canvas.height;
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'white';
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.width, line.y);
        ctx.stroke();
      });
    };

    const animate = () => {
      update();
      draw();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default ShootingStar