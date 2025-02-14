//cria referencia aos elementos
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria um "ouvite" de evento, acionado quando o botão submit for clicado
frm.addEventListener ("submit", (e) => {
    e.preventDefault () //evita o envio do form

    //obtém conteúdo dos campos de entrada
    const numero = Number (frm.inNumero.value)
    const raiz = Math.sqrt(numero) //calcula raiz quadrada do número

    //condição: se valor da raiz for um número inteiro
    if (Number.isInteger(raiz)) {
        resp.innerText = `Raiz: ${raiz}`//mostra a raiz
        //caso contrario "Se Não" (else)
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`//mostra a mensagem
    }

})