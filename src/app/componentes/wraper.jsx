"use client";
import React, { useMemo } from "react";
import { useEffect } from "react";
import "../globals.scss";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
const Wraper = ({ children }) => {
  const gsapPlugins = useMemo(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};

export default Wraper;
