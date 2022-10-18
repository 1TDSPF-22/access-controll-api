import React from "react";
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Produtos from '../components/Produtos'

export default function MainRoutes() {
    return(

        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/produtos' element={<Produtos/>}/>
        </Routes>
    )
}