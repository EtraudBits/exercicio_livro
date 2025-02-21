//cria referência aos elementos da página
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//string com resposta a ser exibida
let resposta = ""
//inicializa contador...
let numContas = 0
// e acumulador (variáveis globais)
let valTotal = 0

//cria Ouvite de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtém conteudo dos campos de entrada
    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    //adiciona valores ao contador e acumulador
    numContas++
    valTotal = valTotal + valor //ou: vaTotal += valor
    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} -------------------------`
    resp2.innerText = `${numContas} contas(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = "" //limpa camps de form
    frm.inValor.value = ""
    frm.inDescricao.focus() //posiciona no campo inDescricao do form


})
