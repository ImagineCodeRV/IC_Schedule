import React from 'react'
import "./Login.css";

const campos = document.querySelectorAll('input.campo-required')
const spans = document.querySelectorAll('span.span-required')
const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
// código para validação de email

const setError = (index) => {
    // em caso do if ser true, aplicar as configirações abaixo
    campos[index].style.border = '3px solid #c23924'
    spans[index].style.display = 'block'
}

const removeError = (index) => {
    // sendo if false, aplicar essas configurações
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

const emailValidate = () => {
    if (!emailRegex.test(campos[0].value)) {
        return setError(0)
    } else {
        return removeError(0)
    }
}

const passwordValidate = () => {
    if (campos[1].value.length == 0) {
        return setError(1)
    } else {
        return removeError(1)
    }
}

const entrar = () => {
    if (campos[0].value.length == 0) {
        setError(0)
    } else {
        removeError(0)
    }

    if (campos[1].value.length == 0) {
        setError(1)
    } else {
        removeError(1)
    }
}

function Login() {


    return (
        <div>
            <main>

                <section class="login">
                    <header class="topo-login">
                        <p>Login</p>
                    </header>

                    <article class="dados">

                        <div class="email">
                            <label for="email">Email</label>
                            <input type="email" placeholder="user@email.com" class="campo-required" oninput={emailValidate} required />
                            <span class="span-required">Digite um email válido</span>
                        </div>

                        <div class="senha">
                            <label for="password">Senha</label>
                            <input type="password" placeholder="Senha" class="campo-required" oninput={passwordValidate} />
                            <span class="span-required">Preencha sua senha</span>
                            <a class="esqueceu-senha" href="./esqueceusenha">Esqueceu sua senha?</a>
                        </div>

                    </article>

                    <article class="botao">
                        <button type="submit" onClick={entrar}>Entrar</button>
                    </article>

                    <article class="texto-rodape">

                        <p>É novo por aqui?<a href="/cadastro">
                            Cadastre-se
                        </a>
                        </p>


                    </article>
                    <article class="texto-rodape">

                        <p>Avançar para <a href="/calendar">
                            Calendario
                        </a>
                        </p>


                    </article>
                    <article class="texto-rodape" />
                </section>


            </main>
        </div>
    )
}

export default Login
