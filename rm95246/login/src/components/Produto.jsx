import React from "react";
import { useEffect } from "react";

const verificar = sessionStorage.getItem("usuario-validado");
const userObj = JSON.parse(sessionStorage.getItem("usuarioObj"));
console.log(userObj);

export default function Produto() {
  useEffect(() => {
    if (verificar == null) {
      window.location = "/";
    }
  }, []);

  return <h1>Olá, {userObj.login}</h1>;
}
