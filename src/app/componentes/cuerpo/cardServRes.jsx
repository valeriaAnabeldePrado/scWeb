import Image from "next/image";
import datosInfo from "./data/dataContenido";

const CardServRes = () => {
  const { dataDos } = datosInfo;

  return (
    <>
      <div className="contenedor-servCard-R">
        {dataDos.map((section, index) => (
          <section key={index} className="seccion-servCard-R">
            <div className="video-overlay"></div>
            <div className="relative cont-img-res">
              <Image src={section.img} fill className="img-respon" />
            </div>
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
