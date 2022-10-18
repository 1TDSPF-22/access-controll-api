import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

export default function MainRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </>
    )
}