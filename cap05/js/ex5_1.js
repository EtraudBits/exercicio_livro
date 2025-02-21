//cria referência aoselementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//cria "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita que form seja eviado
    //obtém o conteúdo dos campos de entrada
    const numero = Number(frm.inNumero.value)
    //variável do tip string, para concatenar a resposta
    let resposta = " "
    //cria um laço de repetição (i começa em 1 e é incrementado até 10)
    for (let i = 1; i <= 10; i++) {
        //a variável resposta vai acumulando os novos conteúdos (nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n" //\n quebra a linha
        //resposta = `${resposta}${numero} x ${i} = ${numero * i}\n`
    }
    //o conteúdo da tag pre é alterado para exibir a tabuada do número
    resp.innerText = resposta
})