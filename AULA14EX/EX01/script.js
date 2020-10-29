function contar() {
    let inicio = document.getElementById('i')
    let fim = document.getElementById('f')
    let passo = document.getElementById('p')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO, Faltam números para contagem!')
    } else {
        resultado.innerHTML = `Contando....</br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) { // Testando se o passo for 0
            alert('Passo inválido! Considerando passo valendo 1')
            p = 1
        }

        if (i < f) { // Contagem Crescente
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += ` ${contador} \u{1f449} `
            }
            resultado.innerHTML += ` \u{1f3c1}`
        } else { // Contagen Decrescente
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += ` ${contador} \u{1f449} `
            }
            resultado.innerHTML += ` \u{1f3c1}`
        }

    }
}