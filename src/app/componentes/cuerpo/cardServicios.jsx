import React, { useEffect, useRef } from "react";
import "../styles.scss";
import WraperAnimation from "./animaciones/wraperAnimation";
import datosInfo from "./data/dataContenido";

const CardServicios = () => {
  const { data } = datosInfo;
  const videoRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <WraperAnimation>
      <div className="contenedor-animacion">
        <section className="contenedor-stycki">
          <div className="cont-cuadradoDos">
            {data.map((section, index) => (
              <div key={index} className="seccion-parrafos">
                <h2 className="section-parrafos-h2">{section.titleA}</h2>
                {section.titleB && (
                  <h2 className="section-parrafos-h2">{section.titleB}</h2>
                )}
                {section.titleC && (
                  <h2 className="section-parrafos-h2">{section.titleC}</h2>
                )}
                <p className="section-parrafos-p">{section.content}</p>
                <div className="cont-etiqueta">
                  {section.tags.map((etiqueta, idx) => (
                    <h4 key={idx} className="etiquetaT">
                      {etiqueta}
                    </h4>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="sticky">
            <div className="imagen">
              {[
                "web_develop",
                "audiovisual",
                "brandign",
                "render",
                "render",
                "invita",
              ].map((video, index) => (
                <div key={index} className={`section${index + 1}`}>
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="video-back"
                    loop
                    muted
                    playsInline
                  >
                    <source src={`/videos/${video}.mp4`} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </WraperAnimation>
  );
};

export default CardServicios;
