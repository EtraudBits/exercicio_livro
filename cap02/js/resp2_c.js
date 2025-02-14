//cria referência aos elementos da Página
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outProduto")
const resp2 = document.querySelector("#outPromocao")

//cria um "ouvinte" de evento, acionado quando o botao submit for clicado
frm.addEventListener ("submit", (e) => {
    //obtém conteúdo de entrada
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    //calcula o valor da promoção
    const descoto = preco * 0.5
    const promocao = (preco * 3) - descoto
    
    //exibe as respostas
    resp1.innerText=`${produto} - Promoção: leve 3 por R$: ${promocao.toFixed(2)}`
    resp2.innerText=`O 3º produto custa apenas R$: ${descoto.toFixed(2)}`

    //evita o envio do form
    e.preventDefault()    
})