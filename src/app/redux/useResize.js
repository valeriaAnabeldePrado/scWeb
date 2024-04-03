"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { cambiarTamanio } from "ana/app/redux/slice";
import { useEffect } from "react";
const ResizeW = ({ children }) => {
  const dispatch = useDispatch();
  //const valorSili = useSelector((state) => state.valorTamanio.tamanio);

  useEffect(() => {
    const handleResize = () => {
      dispatch(cambiarTamanio(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  return <div>{children}</div>;
};

export default ResizeW;
