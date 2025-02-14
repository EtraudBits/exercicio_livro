//cria referencia aos elementos da pagina
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outTempo")
const resp2 = document.querySelector("#outTroco")

//cria um "ouvite" de evento, acionado quando o botao submit for clicado
frm.addEventListener ("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtém conteudo dos campos de entrada
    const valor = Number (frm.inValor.value)

    //mensagem para caso o valor seja menor que 1 real
    if (isNaN(valor) || valor < 1) { //se não for numero (isNaN) ou (||) se for menor que 1
        alert ("Valor insuficiente (Valor Mínimo: 1 Real)")
        frm.inValor.focus()
        return
    }
    
    //declara variaveis que mudará usa-se o let
    let tempo
    let troco

    //cria a condições de tempo e troco
    if (valor >= 3) {
        tempo = 120
        troco = valor - 3
    }
    else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1
    }   

    //exibir respostas
    resp1.innerText=`Tempo: ${tempo} min`
    if (troco > 0) {
        resp2.innerText=`Troco R$: ${troco.toFixed(2)}`
    }

})