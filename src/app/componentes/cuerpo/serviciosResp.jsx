"use client";
import React from "react";
import CardServicios from "./cardServicios";
import { useSelector } from "react-redux";
import ResizeW from "ana/app/redux/useResize";
import CardServRes from "./cardServRes";
const ServiciosResp = () => {
  const valorSili = useSelector((state) => state.valorTamanio.tamanio);

  return (
    <>
      <ResizeW>
        {valorSili <= 644 ? <CardServRes /> : <CardServicios />}
      </ResizeW>
    </>
  );
};

export default ServiciosResp;
