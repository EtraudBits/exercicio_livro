//cria referência aos elementos da pagina
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outSimNao")
const resp2 = document.querySelector("#outTipo")

//cria "ouvite" de Evento, acionado quando o botão submit for clicado
frm.addEventListener ("submit", (e) => {
    e.preventDefault() //evita envio do form

    //obtém conteúdo dos campos de entrada
    const LadoA = Number(frm.inLadoA.value)
    const LadoB = Number(frm.inLadoB.value)
    const LadoC = Number(frm.inLadoC.value)

    //cria condições para exibir a resposta
    if (LadoA > LadoB + LadoC || LadoB > LadoA + LadoC || LadoC > LadoA + LadoB) {
        resp1.innerText = "Lados não formam um Triângulo"
    } else {
        resp1.innerText = "Lados podem formar um triângulo"
    }
    if (LadoA == LadoB && LadoA == LadoC) {
        resp2.innerText = "Tipo: Equilátero"
     } else if (LadoA == LadoB || LadoA == LadoC || LadoB == LadoC) {
        resp2.innerText = "Tipo: Isósceles"
    } else {
        resp2.innerText = "Tipo: Escaleno"
    }

})
