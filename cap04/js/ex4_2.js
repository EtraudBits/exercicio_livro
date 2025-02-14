//cria referêrencia ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//"ouvite" de evento, acionado quandoo botão submit for clicado
frm.addEventListener("reset", () =>{
    resp.innerText=""
})
frm.addEventListener("submit", (e) => {
    //evita envio do form
    e.preventDefault()
    //obtém valores do form
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    //declara a variavel peso (opção 1)

    // let peso
    //se masculino (ou, if masculino == true)
    //if (masculino) {
        // peso = 22 * Math.pow(altura,2) //Math.pow eleva ao quadrado
   // } else {
       // peso = 21 * Math.pow(altura,2)
   // }

   // Usando o operador TERNÁRIO para diminuir linhas de código (opção 2) substitui todas as linhas da opção 1 acima
   const peso = masculino ? 22 * Math.pow(altura,2) : 21 * Math.pow(altura, 2)

    //apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText=`${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
    })