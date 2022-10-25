import React from "react";
import { useEffect } from "react";

const verificar = sessionStorage.getItem("usuario-validado");

export default function Home() {
  useEffect(() => {
    if (verificar == null) {
      window.location = "/";
    }
  }, []);

  return <div>Home</div>;
}
