import React from "react";
import "../styles.scss";
const ScTelephone = () => {
  const tituloResi = ["S", "C"];
  const tutuloResiB = ["S", "T", "U", "D", "I", "O"];
  return (
    <>
      <div className="cont-tituloRes">
        <section className="section-letrasRes">
          {tituloResi.map((letra, index) => (
            <p key={index} className={`laLetra letraRes${letra}`}>
              {letra}
            </p>
          ))}
        </section>
        <section className="section-letrasRes">
          {tutuloResiB.map((letra, index) => (
            <p key={index} className={`laLetra letraRes${letra}`}>
              {letra}
            </p>
          ))}
        </section>
      </div>
    </>
  );
};

export default ScTelephone;
