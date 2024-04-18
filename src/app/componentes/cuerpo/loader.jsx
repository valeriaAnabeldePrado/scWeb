"use client";
import React, { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { cambiarTamanio } from "ana/app/redux/slice";
import PreloaderSC from "./preloaderSC";

const MiLoader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const obtenerTamanioPantalla = () => {
      const tamañoPantalla = window.innerWidth;
      dispatch(cambiarTamanio(tamañoPantalla));
    };

    obtenerTamanioPantalla();
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <PreloaderSC setIsLoading={setIsLoading} />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default MiLoader;
