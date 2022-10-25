import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };
  //AiOutlineLogout

  const usuario = sessionStorage.getItem("usuario-validado");

  return (
    <header>
      <Link to="/home">Home</Link> | <Link to="/produto">Produto</Link> |{" "}
      <Link to="/">Login</Link> | <a href="http://www.fiap.com.br">FIAP</a> |{" "}
      <BiLogOut
        onClick={logout}
        style={{
          display: usuario != null ? "inline-block" : "none",
          cursor: "pointer",
        }}
      />
    </header>
  );
}
