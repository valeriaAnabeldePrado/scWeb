"use client";
import React from "react";
import CardServicios from "./cardServicios";
import { useSelector } from "react-redux";
import ResizeW from "ana/app/redux/useResize";
import CardServRes from "./cardServRes";
const ServiciosResp = () => {
  const valorSili = useSelector((state) => state.valorTamanio.tamanio);
  console.log(valorSili);
  return (
    <>
      <ResizeW>
        {valorSili <= 600 ? <CardServRes /> : <CardServicios />}
      </ResizeW>
    </>
  );
};

export default ServiciosResp;
