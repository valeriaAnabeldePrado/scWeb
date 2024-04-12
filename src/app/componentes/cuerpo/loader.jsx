"use client";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cambiarTamanio } from "ana/app/redux/slice";

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
    }, 1000);
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div style={{ backgroundColor: "aqua", height: "100vh" }}>
          <h1>Cargando...</h1>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default MiLoader;
