import React from "react";
import FormOk from "./form";

const Penultima = () => {
  return (
    <>
      <div className="contactanos-container">
        <p className="contactanos-p">
          Creamos experiencias digitales atractivas que capturan la esencia de
          su negocio y resuenan en su público objetivo.
        </p>
        <div className="contactanos-cont-h2">
          <h2 className="contactanos-cont-h2">Comienza tu</h2>
          <h2 className="contactanos-cont-h2_strong">PROYECTO</h2>
        </div>
      </div>
      <section className="contactanos-containerB">
        <div className="contactanos-texto">
          <p className="contactanos-p">
            Nuestro equipo de profesionales se encargará de entender tus
            necesidades y desarrollar una estrategia personalizada que te
            ayudará a alcanzar tus objetivos.
          </p>
          <button className="buttonb">
            <p className="contactanos-p">Inicia ahora</p>
          </button>
        </div>
      </section>
      <section className="Contactanos-form">
        <h2 className="contactanos-for-h2">Contactate con nosotros</h2>
        <FormOk />
      </section>
    </>
  );
};

export default Penultima;
