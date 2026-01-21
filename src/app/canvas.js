export function initSpaceDots() {
  const canvas = document.getElementById("spaceDots");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0;
  let h = 0;
  let raf = 0;

  const dots = [];
  const DOTS_COUNT = 58;
  const SPEED = 0.12;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function seed() {
    dots.length = 0;
    for (let i = 0; i < DOTS_COUNT; i++) {
      dots.push({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(0.6, 2.0),
        vx: rand(-SPEED, SPEED),
        vy: rand(-SPEED, SPEED),
        a: rand(0.08, 0.28),
      });
    }
  }

  function step() {
    ctx.clearRect(0, 0, w, h);

    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;

      if (d.x < -20) d.x = w + 20;
      if (d.x > w + 20) d.x = -20;
      if (d.y < -20) d.y = h + 20;
      if (d.y > h + 20) d.y = -20;

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(190, 205, 255, ${d.a})`;
      ctx.fill();
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const a = dots[i];
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.045;
          ctx.strokeStyle = `rgba(190, 205, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(step);
  }

  resize();
  seed();
  step();

  window.addEventListener("resize", () => {
    resize();
    seed();
  });

  import.meta.hot?.dispose(() => cancelAnimationFrame(raf));
}
