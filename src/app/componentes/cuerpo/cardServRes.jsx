import React, { useEffect, useRef } from "react";
import datosInfo from "./data/dataContenido";

const CardServRes = () => {
  const { dataDos } = datosInfo;
  const videoRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          observer.unobserve(video);
        }
      });
    };
  }, []);

  return (
    <>
      <div className="contenedor-servCard-R">
        {dataDos.map((section, index) => (
          <section key={index} className="seccion-servCard-R">
            <div className="video-overlay"></div>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="video-back-res"
              loop
              muted
              playsInline
            >
              <source src={`/videos/${section.video}.mp4`} type="video/mp4" />
            </video>
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
