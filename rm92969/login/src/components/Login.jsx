import react from 'react'
import { useState } from "react";

export default function Login() {
    const [usuario, setUsuario] = useState[{
        login: "",
        senha: "",
    }];

    const handleChange = (e)=>{
        setUsuario({...usuario, [e.target.name]: e.target.value });
    }

    const logar = async (e) => {
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(usuario),
        }

        const response = await fetch(
            "http://localhost:8080/ControleAcesso/rest/login/",
            requestOptions
        );

        const data = await response.json();

        if(data.login){
            sessionStorage.setItem("usuario-validado",data.login)
            window.location = "/home";
        }else{
            window.location = "/";
        }
    };
    
    return(
        <div>
            <h2>LOGIN DE USUARIOS</h2>
            <div>
                <form onSubmit={logar}>
                    <fieldset>
                        <legend>LOGIN</legend>
                        <div>
                            <label htmlFor="idLogin">Usuário</label>
                            <input type="text" name="login" id="idLogin" placceholder="Login"
                            vakye={usuario.login}
                            onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="idSenha">Usuário</label>
                            <input type="password" name="senha" id="idSenha" placceholder="Senha"
                            vakye={usuario.senha}
                            onChange={handleChange} />
                        </div>
                        <div><button>Entrar</button></div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}