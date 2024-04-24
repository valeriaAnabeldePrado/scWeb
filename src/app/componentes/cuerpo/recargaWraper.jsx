"use client";
import React from "react";
import { useEffect } from "react";

const RecargaWraper = () => {
  useEffect(() => {
    const handleWindowSizeChange = () => {
      window.location.reload();
    };

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return null;
};

export default RecargaWraper;
