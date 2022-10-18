import React from "react";
import Produtos from "./components/Produtos"

export default function App(){

    sessionStorage.setItem("userName","Yasmin")

    return(
        <div>
            <h1>CONTROLE DE ACESSO</h1>
            <Produtos />
        </div>



    )
}