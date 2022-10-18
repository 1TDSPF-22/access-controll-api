import React from 'react'
import Produtos from './components/Produto'

export default function App(){
    
    sessionStorage.setItem("userName", "BEATRIZ")
    
    return(
        <div>
            <h1>CONTROLE DE ACESSO</h1>
            
            <Produto />

        </div>
    )
}