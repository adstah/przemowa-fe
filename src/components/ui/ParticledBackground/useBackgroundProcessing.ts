import { useEffect } from 'react';
import { TweenLite, Circ } from 'gsap';
import { Point } from './ParticledBackground.types';
import { Circle } from './ParticledBackground.util';

export const useBackgroundProcessing = (
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
  containerRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    let width: number;
    let height: number;
    let ctx: CanvasRenderingContext2D | null;
    let points: Point[];
    let animateHeader = true;

    function initHeader() {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!canvas || !container) return;

      width = container.offsetWidth;
      height = container.offsetHeight;

      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      points = [];
      for (let x = 0; x < width; x += width / 10) {
        for (let y = 0; y < height; y += height / 10) {
          const px = x + (Math.random() * width) / 10;
          const py = y + (Math.random() * height) / 10;
          const p: Point = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // Find the closest points for each point
      for (let i = 0; i < points.length; i++) {
        const closest: Point[] = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 3; k++) {
              if (!placed) {
                if (!closest[k]) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 3; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (const i in points) {
        const c = new Circle(
          points[i],
          2 + Math.random() * 2,
          'rgba(66, 165, 245, 0.3)'
        );
        points[i].circle = c;
      }
    }

    function addListeners() {
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    function scrollCheck() {
      animateHeader = document.body.scrollTop <= height;
    }

    function resize() {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!canvas || !container) return;

      width = container.offsetWidth;
      height = container.offsetHeight;

      canvas.width = width;
      canvas.height = height;
    }

    function initAnimation() {
      animate();
      for (const i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader && ctx) {
        ctx.clearRect(0, 0, width, height);
        for (const i in points) {
          // draw connections between points
          drawLines(points[i]);
          points[i].circle?.draw(ctx);
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p: Point) {
      TweenLite.to(p, 1 + 5 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        },
      });
    }

    function drawLines(p: Point) {
      if (!ctx || !p.closest) return;
      for (const i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = `rgba(92,83,234,0.2)`; // default opacity
        ctx.stroke();
      }
    }

    function getDistance(p1: Point, p2: Point) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    initHeader();
    initAnimation();
    addListeners();

    return () => {
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);
};
