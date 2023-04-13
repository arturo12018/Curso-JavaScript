export default function hamburguerMenu(panelBtn, panel) {
  const d = document;

  d.addEventListener("click", (e) => {
    //console.log(e.target.matches(panelBtn));
    if (!e.target.matches(panelBtn)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(".panel-btn").classList.toggle("is-active");
    }
  });
}
