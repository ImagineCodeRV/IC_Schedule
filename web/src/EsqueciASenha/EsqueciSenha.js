import React from 'react'
import './EsqueciSenha.css'

function EsqueciSenha() {

    const campos = document.querySelectorAll('input#email')
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
            setError(0)
        } else {
            removeError(0)
        }
    }

    const recuperar = () => {
        if (campos[0].value.length == 0) {
            setError(0)
        } else {
            removeError(0)
        }
    }
  return (
    <div>
          <main>

              <section class="recuperar-senha">
                  <header class="topo-recuperar-senha">Recuperar senha</header>

                  <article class="descriçao">
                      <p>Esqueceu sua senha? Não se preocupe, preencha abaixo com seu email e enviaremos sua nova senha.</p>
                  </article>

                  <article class="email">
                      <label for="email">Email</label>
                      <input id="email" type="email" placeholder="user@email.com" oninput="emailValidate()" required/>
                          <span class="span-required">Digite um email válido</span>
                  </article>

                  <article class="botao">
                      <button type="submit" onclick="recuperar()">Recuperar</button>
                  </article>

                  <article class="texto-rodape">
                      <p>Agora que já tem sua nova senha, <a href="/">faça seu login</a></p>
                  </article>

              </section>

          </main>
    </div>
  )
}

export default EsqueciSenha
