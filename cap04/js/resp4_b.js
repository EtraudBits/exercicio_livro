//cria referencia aos elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")


//cria um "ouvite" de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtém conteúdo dos campos de entrada
    const permitida = Number (frm.invelocidadePermitida.value)
    const condutor = Number (frm.invelocidadeCondutor.value)
    const limite = permitida * 1.2
    
    //codição
    if (condutor <= permitida) {
        resp.innerText = `Situação: Sem Multa`
    } else if (condutor <= limite) {
        resp.innerText = `Situação: Multa Leve`
    } else {
        resp.innerText= `Situração: Multa Grave`
    }
})
