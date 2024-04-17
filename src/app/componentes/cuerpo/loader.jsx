"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cambiarTamanio } from "ana/app/redux/slice";
import PreloaderSC from "./preloaderSC";

const MiLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const obtenerTamanioPantalla = () => {
      const tamañoPantalla = window.innerWidth;
      dispatch(cambiarTamanio(tamañoPantalla));
    };

    obtenerTamanioPantalla();

    setTimeout(() => {
      setIsLoading(false);
    }, 2300);
  }, [dispatch]);
  return <>{isLoading ? <PreloaderSC /> : <>{children}</>}</>;
};

export default MiLoader;
