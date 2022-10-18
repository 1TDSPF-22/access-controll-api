import React from 'react';
import {Link} from 'react-router-dom'

function Menu() {

    const logout = () => {
        sessionStorage.removeItem("useuario-validado")
        window.location = "/"
    }

    const usuario = sessionStorage.getItem("usuario-validado")

    return(
        <div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/produtos">Produtos</Link></li>
                <li><button onClick={logout}>{usuario} Logout</button></li>
            </ul>
        </div>
    );
}

export default Menu;