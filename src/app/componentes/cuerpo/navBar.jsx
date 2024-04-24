"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [menuActivo, setMenuActivo] = useState(false);
  const handleClick = () => {
    setMenuActivo(!menuActivo);
  };
  return (
    <>
      <div className="containerMenu">
        <section className="contTextMenu" onClick={handleClick}>
          <h2 className="titleMenu">Ver menu</h2>
        </section>
        <nav className={`containerNav ${menuActivo ? "activo" : "desactivo"}`}>
          <ul>
            <li>✦ ¿Que hacemos? ✦</li>
            <li>✦ Servicios disponibles ✦</li>
            <li>✦ Contáctate ✦</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
