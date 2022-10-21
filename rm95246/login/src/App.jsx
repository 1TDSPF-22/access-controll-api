import React from 'react'
import Menu from './components/Menu';
import Produtos from './components/Produto'
import MainRoutes from './routes/MainRoutes';

export default function App(){
    
    sessionStorage.setItem("userName", "BEATRIZ")
    
    return(
        <>
            <Menu />
            <h1>CONTROLE DE ACESSO</h1>
            <MainRoutes />
        </>
    );
}