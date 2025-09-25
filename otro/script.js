// Carrusel con flechas
const carrusel = document.querySelector(".carrusel");
const flechaIzq = document.querySelector(".flecha.izq");
const flechaDer = document.querySelector(".flecha.der");

let desplazamiento = 0;

flechaDer.addEventListener("click", () => {
  desplazamiento -= 270;
  carrusel.style.transform = `translateX(${desplazamiento}px)`;
});

flechaIzq.addEventListener("click", () => {
  desplazamiento += 270;
  carrusel.style.transform = `translateX(${desplazamiento}px)`;
});

// Animación al hacer scroll
const secciones = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

secciones.forEach(section => observer.observe(section));
