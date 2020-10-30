let numero = document.getElementById('numero')
let lista = document.getElementById('lista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor inválido para a lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de Finalizar!')
    } else {
        let total = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maior)
                maior = valores[posicao]
            if (valores[posicao] < menor)
                menor = valores[posicao]
        }

        media = soma / total

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados!`
        resultado.innerHTML += `<p>O maior valor informado é ${maior} e o menor é ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os números são: ${soma}</p>`
        resultado.innerHTML += `<p>A média desses números são: ${media.toFixed(3)}</p>`
    }
}