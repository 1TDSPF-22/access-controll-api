import React from 'react';
import Menu from './components/Menu';
import Produtos from "./components/Produtos"
import MainRoutes from './routes/MainRoutes';

export default function App() {

    sessionStorage.setItem("userName","Vinícius")

  return (
    <>
        <Menu />
        <h1>Controle de Acesso</h1>
        <Menu/>
        <MainRoutes/>
    </>
  )
}

 