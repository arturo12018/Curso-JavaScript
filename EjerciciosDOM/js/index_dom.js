import hamburguerMenu from "./menuHamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel");
  digitalClock("#reloj", "#iniciar-reloj", "#desacrtivar-reloj");
});
