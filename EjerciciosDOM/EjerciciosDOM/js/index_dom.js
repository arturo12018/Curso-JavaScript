import hamburguerMenu from "./menuHamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".secciones");
  digitalClock("#reloj", "#iniciar-reloj", "#desacrtivar-reloj");
  alarm("./assets/assets_alarma.mp3", "#iniciar-alarma", "#detener-alarma");
});
