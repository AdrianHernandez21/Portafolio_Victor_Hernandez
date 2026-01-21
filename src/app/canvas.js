export function initSpaceDots() {
  // Inicializa el canvas de fondo con puntos/lineas animadas.
  const canvas = document.getElementById("spaceDots");
  if (!canvas) return;

  // Obtiene el contexto 2D; si no existe, se cancela.
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Tamaño actual del canvas y referencia al requestAnimationFrame.
  let w = 0;
  let h = 0;
  let raf = 0;

  // Configuración y estado de partículas.
  const dots = [];
  const DOTS_COUNT = 58;
  const SPEED = 0.12;

  function resize() {
    // Ajusta el canvas al tamaño de la ventana.
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function rand(min, max) {
    // Helper para números aleatorios en rango.
    return Math.random() * (max - min) + min;
  }

  function seed() {
    // Crea el set inicial de puntos con posición, velocidad y alpha.
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
    // Limpia el frame y dibuja puntos + conexiones cercanas.
    ctx.clearRect(0, 0, w, h);

    for (const d of dots) {
      // Actualiza posición y aplica “wrap-around” en bordes.
      d.x += d.vx;
      d.y += d.vy;

      if (d.x < -20) d.x = w + 20;
      if (d.x > w + 20) d.x = -20;
      if (d.y < -20) d.y = h + 20;
      if (d.y > h + 20) d.y = -20;

      // Dibuja cada punto.
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(190, 205, 255, ${d.a})`;
      ctx.fill();
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        // Conecta puntos cercanos con líneas tenues.
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

    // Loop de animación.
    raf = requestAnimationFrame(step);
  }

  // Arranque inicial del fondo animado.
  resize();
  seed();
  step();

  window.addEventListener("resize", () => {
    // Recalcula tamaño y re-genera puntos al redimensionar.
    resize();
    seed();
  });

  // Limpieza automática del RAF cuando Vite hace HMR.
  import.meta.hot?.dispose(() => cancelAnimationFrame(raf));
}
