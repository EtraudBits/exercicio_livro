//cria referência aos elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("#valorPagar")

//cria um "ouvite" de evento, acionado quando o botão submit for clicado
frm.addEventListener ("submit", (e) => {
    //obtem conteúdo dos camps de entrada
    const valor = Number(frm.inValor.value)
    const uso = Number(frm.inUso.value)

    //caluca o valor a pagar (Math.ceil arrendonda para cima)
    const totalPagar = Math.ceil (uso/15)*valor

    //exibe a resposta
    resp.innerText = `Valor a Pagar R$: ${totalPagar.toFixed(2)}`
    
    //evita envio do form
    e.preventDefault()
})