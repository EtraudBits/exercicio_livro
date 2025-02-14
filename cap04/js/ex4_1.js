//cria referência aso elementos da pagina
const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")
const mensagem = document.querySelector("#outMensagem")

//cria um "ouvite" de evento, acionado quando o botao sumit for clicado
frm.addEventListener ("submit", (e) => {
   //envita o envio do form
    e.preventDefault()

//obtém conteudo dos campos de entrada
    const nome = frm.inNomeAluno.value
    const nota1 = Number (frm.inNota1.value)
    const nota2 = Number (frm.inNota2.value)
    const nota3 = Number (frm.inNota3.value)
    const nota4 = Number (frm.inNota4.value)

//calcula a média das notas
    const media = (nota1 + nota2 + nota3 + nota4) / 4
    resp.innerText = `Média das Notas é: ${media.toFixed(2)}`

//cria condições (se= IF, else if = senão se, else = senao)
if(media >= 7) {
    //altera o texto e estilo da cor do elemento mensagem (stlyle.color)
    mensagem.innerText = `Parabéns ${nome}! você foi Aprovado(a)`
    mensagem.style.color = "blue"
} else if (media >=4) {
    mensagem.innerText = `ATENÇÃO ${nome}! você ficou em Recuperação`
    mensagem.style.color = "Green"   
} else {
    mensagem.innerText = `Ops ${nome}... Você foi Reprovado(a)`
    mensagem.style.color = "red"
}
})
