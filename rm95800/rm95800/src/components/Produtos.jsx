import React from 'react'

export default function Produto(){
    return(
        <div>
            <h1>PRODUTOS</h1>

            <p>Nome : {sessionStorage.getItem("userName")}</p>
        
        </div>    
    )
}