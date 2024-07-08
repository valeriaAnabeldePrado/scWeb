import gsap from "gsap";

export const paralax = () => {
  gsap.to(".tituloHero", {
    y: "-30%",
    scrollTrigger: {
      trigger: ".hero-cuerpo",
      start: "top top",
      end: "bottom center",
      scrub: 1,
    },
  });
};
export const paralaxEsferas = () => {
  gsap.to(".esfera", {
    y: "30%",
    scrollTrigger: {
      trigger: ".hero-cuerpo",
      start: "200 200",
      end: "bottom top",

      scrub: 1,
    },
  });
};
export const animateTituloA = () => {
  let timeline = gsap.timeline();
  timeline
    .to(".T", { duration: 0.5, ease: "power3.out", opacity: 1, y: 0 })
    .to(".S.posicion3", { duration: 1.1, ease: "power3.out", opacity: 1, y: 0 })
    .to(".C", { duration: 0.8, ease: "power3.out", opacity: 1, y: 0 })
    .to(".S.posicion0", { ease: "power3.out", opacity: 1, y: 0 });
  return () => timeline.kill();
};

export const animateTituloB = () => {
  let timelineB = gsap.timeline();
  timelineB
    .to(".U", { duration: 0.6, ease: "power3.out", opacity: 1, y: 0 })
    .to(".D", { duration: 0.7, ease: "power3.out", opacity: 1, y: 0 })
    .to(".I", { duration: 0.8, ease: "power3.out", opacity: 1, y: 0 })
    .to(".O", { ease: "power3.out", opacity: 1, y: 0 });
  return () => timelineB.kill();
};
//animacionHero Celu
export const animacionCelu = () => {
  let timeline = gsap.timeline();
  timeline
    .to(".letraResS", { ease: "power3.out", opacity: 1, y: 0 })
    .to(".letraResT", { ease: "power3.out", opacity: 1, y: 0 })
    .to(".letraResC", { ease: "power3.out", opacity: 1, y: 0 })
    .to(".letraResU", { ease: "power3.out", opacity: 1, y: 0 })
    .to(".letraResD", { ease: "power3.out", opacity: 1, y: 0 })
    .to(".letraResI", { ease: "power3.out", opacity: 1, y: 0 })
    .to(".letraResO", { ease: "power3.out", opacity: 1, y: 0 });
};

export const animateTextoHero = () => {
  gsap.to(".textoHero", {
    delay: 1.7,
    duration: 0.8,
    ease: "power3.out",
    x: 0,
    opacity: 1,
  });
};
