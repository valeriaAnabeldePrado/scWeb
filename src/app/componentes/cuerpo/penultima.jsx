import React from "react";
import FooterInfinito from "./footer";

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
          <button className="block w-full  bg-indigo-600 px-3.5 py-2.5 text-center text-lg font-normal text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 buttonb">
            <p className="contactanos-p">Inicia ahora</p>
          </button>
        </div>
      </section>
      <section className="Contactanos-form">
        <h2 className="contactanos-for-h2">Contactate con nosotros</h2>
        <section className="contContacto">
          <a href="mailto:contacto@smartcloudstudio.com">
            <p className="contactoB">⟡ contacto@smartcloudstudio.com ⟡</p>
          </a>
          <a href="https://wa.me/XXXXXXXXXX">
            <p className="contactoB">⟡ Contáctanos por WhatsApp ⟡</p>
          </a>
        </section>
      </section>
      <FooterInfinito />
    </>
  );
};

export default Penultima;
