import React from "react";

export default function Login() {
  return (
    <div>
      <h2>LOGIN DE USUÁRIOS</h2>
      <div>
        <form onSubmit="">
          <fieldset>
            <legend>LOGIN</legend>
            <div>
              <label htmlFor="idLogin">Usuário</label>
              <input
                type="text"
                name="login"
                id="idLogin"
                placeholder="Login"
                value=""
                onChange=""
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Senha"
                value=""
                onChange=""
              />
            </div>
            <div>
              <button>Logar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
