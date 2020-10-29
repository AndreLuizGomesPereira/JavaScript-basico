function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('selecionarTabuada')

    if (numero.value == 0) {
        alert('Dados da tabuada incorreta!')
    } else {
        let num = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = ` ${num} x ${contador} = ${num * contador}`
            tabuada.appendChild(item)
            contador++
        }
    }

}