import React from "react";
import "../styles.scss";
import WraperAnimation from "./animaciones/wraperAnimation";
import datosInfo from "./data/dataContenido";

const CardServicios = () => {
  const { data } = datosInfo;
  return (
    <>
      <WraperAnimation>
        <div className="contenedor-animacion">
          <section className="contenedor-stycki">
            <div className="cont-cuadradoDos">
              {data.map((section, index) => (
                <section key={index} className="seccion-parrafos">
                  <h2 className="section-parrafos-h2">{section.titleA}</h2>
                  {section.titleB && (
                    <h2 className="section-parrafos-h2">{section.titleB}</h2>
                  )}
                  {section.titleC && (
                    <h2 className="section-parrafos-h2">{section.titleC}</h2>
                  )}

                  <p className="section-parrafos-p">{section.content}</p>
                  <section className="cont-etiqueta">
                    {section.tags.map((etiqueta, index) => (
                      <h4 key={index} className="etiquetaT">
                        {etiqueta}
                      </h4>
                    ))}
                  </section>
                </section>
              ))}
            </div>
            <div className="sticky">
              <section className="imagen">
                <section className="section1">section1</section>
                <section className="section2">section2</section>
                <section className="section3">section3</section>
                <section className="section4">section4</section>
                <section className="section5">section4</section>
                <section className="section6">section4</section>
              </section>
            </div>
          </section>
        </div>
      </WraperAnimation>
    </>
  );
};

export default CardServicios;
