import React from "react";

const Presentacion = () => {
  return (
    <>
      <section className="presentacion-container">
        <div className="presentacion-titulo">
          <h2>¿Que</h2>
          <h2>hacemos?</h2>
        </div>
        <p className="presentacion-texto">
          En SmartCloud, combinamos diseño y tecnología, ofreciendo servicios
          como diseño UX/UI, desarrollo de software a medida, branding,
          producciones audiovisuales de alta calidad y renderizado 3D. Nos
          destacamos por nuestra pasión por la calidad y la innovación
          <strong className="m-2" style={{ backgroundColor: "transparent" }}>
            Somos la opción para quienes quieren destacar en un mundo digital
            saturado; lo estándar no basta.
          </strong>
          Transformamos negocios con tecnología que conecta profundamente con
          las audiencias. Nuestro equipo ofrece soluciones innovadoras y
          técnicamente avanzadas. Desafiamos lo convencional para crear
          experiencias digitales excepcionales.
        </p>
      </section>
    </>
  );
};

export default Presentacion;
