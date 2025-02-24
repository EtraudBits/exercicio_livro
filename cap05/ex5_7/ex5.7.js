//cria referência aos elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um ouvite quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form

    //obtém o conteudo dos campos de entrada
    const numero = Number(frm.inNumero.value)
    let estrelas = "" //variavel que irá concatnar as estrelas/traços
    for (let i = 1; i <= numero; i++) { //cria laço de repetição de 1 até numero
        if (i % 2 == 1) {
            estrelas = estrelas + "*" //na posição impar do i: *
        } else {
            estrelas = estrelas + "_"//na posição par: _
        }
    }
    resp.innerText = estrelas //exibe as estrelas
})