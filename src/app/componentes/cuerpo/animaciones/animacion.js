import gsap from "gsap";

export const paralax = () => {
  gsap.to(".tituloHero", {
    y: "-100%",
    scrollTrigger: {
      trigger: ".hero-cuerpo",
      start: "top top",
      end: "bottom center",
      scrub: 1,
    },
  });
};

export const animateTituloA = () => {
  let timeline = gsap.timeline();
  timeline
    .to(".T", { duration: 0.7, ease: "power3.out", opacity: 1, y: 0 })
    .to(".S.posicion3", { duration: 1.1, ease: "power3.out", opacity: 1, y: 0 })
    .to(".C", { duration: 1.7, ease: "power3.out", opacity: 1, y: 0 })
    .to(".S.posicion0", { ease: "power3.out", opacity: 1, y: 0 });
  return () => timeline.kill();
};

export const animateTituloB = () => {
  let timelineB = gsap.timeline();
  timelineB
    .to(".U", { duration: 1, ease: "power3.out", opacity: 1, y: 0 })
    .to(".D", { duration: 1.2, ease: "power3.out", opacity: 1, y: 0 })
    .to(".I", { duration: 1.5, ease: "power3.out", opacity: 1, y: 0 })
    .to(".O", { ease: "power3.out", opacity: 1, y: 0 });
  return () => timelineB.kill();
};

export const animateTextoHero = () => {
  gsap.to(".textoHero", {
    delay: 3,
    duration: 1.5,
    ease: "power3.out",
    x: 0,
    opacity: 1,
  });
};
