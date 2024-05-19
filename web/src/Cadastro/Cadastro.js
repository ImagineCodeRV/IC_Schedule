import React from 'react'
import './Cadastro.css'

function Cadastro()  {
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


    const nameValidate = () => {
        if (campos[0].value.length < 3) {
            setError(0)
        } else {
            removeError(0)
        }
    }

    const surnameValidate = () => {
        if (campos[1].value.length < 3) {
            setError(1)
        } else {
            removeError(1)
        }
    }

    const emailValidate = () => {
        if (!emailRegex.test(campos[2].value)) {
            setError(2)
        } else {
            removeError(2)
        }
    }

    const passwordValidate = () => {
        if (campos[3].value.length < 6 || campos[3].value.length > 12) {
            setError(3)
        } else {
            removeError(3)
            comparePassword()
        }
    }

    const comparePassword = () => {
        if (campos[3].value == campos[4].value) {
            removeError(4)
        } else {
            setError(4)
        }
    }

    const cadastrar = () => {
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

        if (campos[2].value.length == 0) {
            setError(2)
        } else {
            removeError(2)
        }

        if (campos[3].value.length == 0) {
            setError(3)
        } else {
            removeError(3)
        }

        if (campos[4].value.length == 0) {
            setError(4)
        } else {
            removeError(4)
        }
    }
    return (
        <div>
            <main>
                <section class="cadastro">
                    <header>
                        <p class="topo-cadastro">Cadastro</p>
                    </header>

                    <article class="dados">

                        <div class="imagem">
                            <a href=""><ion-icon name="image-outline"></ion-icon></a>
                        </div>
                        <div id="nome">
                            <label for="name">Nome</label>
                            <input class="campo-required" id="name" type="text" placeholder="Nome" oninput="nameValidate()" required/>
                                <span class="span-required">Nome deve conter pelo menos 3 caracteres</span>
                        </div>

                        <div id="apelido">
                            <label for="user">Apelido</label>
                            <input class="campo-required" id="user" type="text" placeholder="Apelido" oninput="surnameValidate()" required />
                            <span class="span-required">Apelido deve conter pelo menos 3 caracteres</span>
                        </div>

                        <div id="email">
                            <label for="email">Email</label>
                            <input class="campo-required" id="email" type="email" placeholder="user@email.com" oninput="emailValidate()" required />
                            <span class="span-required">Email inválido</span>
                        </div>

                        <div id="senha">
                            <label for="password">Senha</label>
                            <input class="campo-required" id="password" type="password" placeholder="Senha" oninput="passwordValidate()" required />
                            <span class="span-required">Senha deve conter entre 6 e 12 caracteres</span>
                        </div>

                        <div id="confirmar-senha">
                            <label for="confirm-password">Confirme sua senha</label>
                            <input class="campo-required" id="confirm-password" type="password" placeholder="Confirme sua senha" oninput="comparePassword()" required />
                            <span class="span-required">Senhas não compatíveis</span>
                        </div>
                    </article>

                    <article class="botao">
                        <button type="submit" onclick="cadastrar()">Cadastrar</button>
                    </article>

                    <article class="texto-rodape">
                        <p>Já é cadastrado?
                            <a href="/">Faça o login</a>
                        </p>

                    </article>
                </section>

            </main>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
            <script src="script.js"></script>
        </div>
    )
}

export default Cadastro
