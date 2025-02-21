//cria referência aos elementos da página
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
//cria ouvinte de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault() //evita o envio do form
    //obtem o numero informado
    const num = Number(frm.inNumero.value)
    //declara e inicia o contador
    //  let numDivisores = 0
    //percorre todos os possiveis divisores de num
    // for (let i = 1; i <= num; i++) {
    //verifica se i (1, 2, 3 ...) é divisor do num
    //   if (num % i == 0) {
    //     numDivisores++ //se é incrementa contador
    // }
    // }
    // if (numDivisores == 2) { //se possui apenas divisores, é primo
    //   resp.innerText = `${num} é Primo`
    // } else {
    //   resp.innerText = `${num} não é Primo`
    // }
    //mudança no trecho acima do programa, a fim de otimizar a sua performance.
    let temDivisor = 0 //declara e inicializa a variavel tipo flag
    for (let i = 2; i <= num / 2; i++) //percorre os possivei divisores do num (como o maior divisor interiro possivel de um numero é a sua metade, indicamos que a repetição deve ir até num/2)
        if (num % i == 0) { //se tem um divisor
            temDivisor = 1 //muda o flag
            break // sai da repetição
        }
    if (num > 1 && !temDivisor) { // se num > 1 e não possui divisor
        resp.innerText = `${num} É Primo`
    } else {
        resp.innerText = `${num} Não é Primo`
    }
})