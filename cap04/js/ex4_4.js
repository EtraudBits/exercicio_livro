//cria referencia aos elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvite" de evento, acionado quando o botão for clicado
frm.addEventListener ("submit", (e) => {
    //evita envio do form
    e.preventDefault ()
    //obtém e converte o conteúdo do campo inHoraBrasil
    const horaBrasil = Number(frm.inhoraBrasil.value)
    let horaFranca = horaBrasil + 5 //calcula o horário da frança
    if (horaFranca > 24) { //se passar das 24 horas na frança
        horaFranca = horaFranca - 24 //...subtrai 24
    }
    //exibe resposta (altera o conteúdo do elemento h3 da pagina)
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)} horas`

})