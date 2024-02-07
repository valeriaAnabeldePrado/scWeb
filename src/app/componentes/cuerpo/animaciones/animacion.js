import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const paralax = () => {
  gsap.registerPlugin(ScrollTrigger);
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-cuerpo",
      start: "top top",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
  });
  timeline
    .to(".esfera1", {
      top: "30%",
    })
    .to(
      ".esfera2",
      {
        bottom: "10%",
      },
      "<"
    )
    .to(
      ".tituloHero",
      {
        y: "-20%",
      },
      "<"
    );
};

export const animateTituloA = () => {
  let timeline = gsap.timeline();
  timeline
    .to(".T", { duration: 0.7, ease: "power3.out", opacity: 1, y: 0 })
    .to(".S.posicion3", { duration: 1.1, ease: "power3.out", opacity: 1, y: 0 })
    .to(".C", { duration: 1.7, ease: "power3.out", opacity: 1, y: 0 })
    .to(".S.posicion0", { ease: "power3.out", opacity: 1, y: 0 });
};

export const animateTituloB = () => {
  let timelineB = gsap.timeline();
  timelineB
    .to(".U", { duration: 1, ease: "power3.out", opacity: 1, y: 0 })
    .to(".D", { duration: 1.2, ease: "power3.out", opacity: 1, y: 0 })
    .to(".I", { duration: 1.5, ease: "power3.out", opacity: 1, y: 0 })
    .to(".O", { ease: "power3.out", opacity: 1, y: 0 });
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
