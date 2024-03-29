import React from "react";
import "../styles.scss";
import WraperAnimation from "./animaciones/wraperAnimation";
import data from "./data/dataContenido";
import FooterInfinito from "./footer";

const CardServicios = () => {
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
                  {section.titleD && (
                    <h2 className="section-parrafos-h2">{section.titleD}</h2>
                  )}
                  <p className="section-parrafos-p">{section.content}</p>
                </section>
              ))}
            </div>
            <div className="sticky">
              <section className="imagen">
                <section className="section1">section1</section>
                <section className="section2">section2</section>
                <section className="section3">section3</section>
                <section className="section4">section4</section>
              </section>
            </div>
          </section>
        </div>
      </WraperAnimation>
    </>
  );
};

export default CardServicios;
