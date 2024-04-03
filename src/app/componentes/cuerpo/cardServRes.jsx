import React from "react";
import datosInfo from "./data/dataContenido";
import imagen from "/public/mokUp.jpg";
import Image from "next/image";
const CardServRes = () => {
  const { dataDos } = datosInfo;
  return (
    <>
      <div className="contenedor-servCard-R">
        {dataDos.map((section, index) => (
          <section key={index} className="seccion-servCard-R">
            <Image src={imagen} alt="imagen" fill className="imagenMuestra" />
            <section className="contParafos">
              <h2 className="section-h2-R">{section.titleA}</h2>
              <p className="section-p-R">{section.content}</p>
            </section>
          </section>
        ))}
      </div>
    </>
  );
};

export default CardServRes;
