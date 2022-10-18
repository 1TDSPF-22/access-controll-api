import React, {useEffect} from 'react';

const verificar = sessionStorage.getItem("usuario-validado")

function Porodutos() {

    useEffect(() =>{
        if(verificar == null){
            window.location = "/"
        }
    },[])

    return(
       <div>
         <h1>Produtos</h1>
         <p>Nome: {sessionStorage.getItem("userName")}</p>
       </div>
    );
}

export default Porodutos;