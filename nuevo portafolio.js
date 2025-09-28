window.addEventListener("load", () => {
  setTimeout(() => {
    // Ocultar loader
    document.getElementById("loader").style.display = "none";

    // Mostrar logo fijo
    const fixedLogo = document.getElementById("logo-fixed");
    fixedLogo.style.opacity = "1";

    // Mostrar contenido
    document.getElementById("content").style.display = "block";

    // Habilitar scroll
    document.body.style.overflow = "auto";
  }, 2500);
});

// agregamos depues para la luz del cursor 

const light = document.getElementById("cursor-light");

window.addEventListener("mousemove", (e) => {
  // Calcula la posición del cursor
  const x = e.clientX -770; // el -50 centra el gradiente
  const y = e.clientY -370;

  light.style.transform = `translate(${x}px, ${y}px)`;
});
