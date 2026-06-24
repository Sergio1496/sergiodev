// Transición de página compartida (slide) usada en proyectos, blog y artículos.
const anim = {
  old: {
    name: "slide",
    duration: "0.8s",
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fillMode: "forwards",
  },
  new: {
    name: "slide",
    duration: "0.8s",
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    fillMode: "backwards",
  },
};

export const pageTransition = {
  forwards: anim,
  backwards: anim,
};
