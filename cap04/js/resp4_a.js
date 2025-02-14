//cria referencia aos elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

//cria um "ouvite" de evento, acionado quando o botão submit for clicado
frm.addEventListener ("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtém conteúdo dos camps de entrada
    const numero = Number(frm.inNumero.value)
    //calcula a condição
    if (numero % 2 === 0) {
        resp.innerText = `O número: ${numero} é Par`
    } else { 
        resp.innerText = `O número: ${numero} é ìmpar`
    }
})