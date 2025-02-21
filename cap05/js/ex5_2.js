//cria referencia aos elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o form ser enviado
    //obtém conteudo dos campos de entrada
    const numero = Number(frm.inNumero.value)

    //string para montar a resposta
    let resposta = `Entre ${numero} e 1: `
    //cria um for decrescente
    for (let i = numero; i > 1; i--) {
        resposta = resposta + i + ", " //resposta acumula números (e virgulas)
    }
    resp.innerText = resposta + "1." //exibe a resposta
})