
        // Cria referência aos elementos da página
        const frm = document.querySelector("form")
        const resp1 = document.querySelector("#outResp1")
        const resp2 = document.querySelector("#outResp2")
        const resp3 = document.querySelector("#outResp3")
        const outErro = document.querySelector("#outErro") // Elemento para mensagens de erro

        // Adiciona um evento para o formulário
        frm.addEventListener("submit", (e) => {
            e.preventDefault() // Evita o envio do formulário

            // Obtém o valor do saque
            const saque = Number(frm.inSaque.value.trim())

            // Reseta os textos anteriores
            resp1.innerText = ""
            resp2.innerText = ""
            resp3.innerText = ""
            outErro.innerText = "" // Limpa a mensagem de erro

            // Valida se o valor do saque é válido
            if (isNaN(saque) || saque < 10 || saque % 10 !== 0) {
                outErro.innerText = "Valor inválido! Informe um valor múltiplo de 10 e maior ou igual a R$ 10."
                frm.inSaque.focus()
                return
            }

            // Calcula quantidade de notas
            let restante = saque
            const notasCem = Math.floor(restante / 100)
            restante %= 100

            const notasCinquenta = Math.floor(restante / 50)
            restante %= 50

            const notasDez = Math.floor(restante / 10)

            // Exibe as quantidades de notas, se houver
            if (notasCem > 0) resp1.innerText = `Notas de R$ 100: ${notasCem}`
            if (notasCinquenta > 0) resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
            if (notasDez > 0) resp3.innerText = `Notas de R$ 10: ${notasDez}`
        })