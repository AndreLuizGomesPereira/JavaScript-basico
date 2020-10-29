function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('nascimento')
    var resultado = document.getElementById('resultado')

    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert('Erro, Verifique os dados e tente novamente!')
    } else {
        var formularioSexo = document.getElementsByName('sexo')
        var idade = ano - formularioAno.value
        var genero = ''
        var imagem = document.createElement('img') // Criar um elemento HTML
        imagem.setAttribute('id', 'foto') // Configurar a forma do elemento que ira aparece no HTML

        if (formularioSexo[0].checked) {

            if (idade >= 0 && idade < 11) {
                genero = 'Menino'
                imagem.setAttribute('src', 'img/crianca-man.jpg')
            } else if (idade < 21) {
                genero = 'Jovem Garoto'
                imagem.setAttribute('src', 'img/adolescente-man.jpg')
            } else if (idade >= 21 && idade <= 45) {
                genero = 'Homem'
                imagem.setAttribute('src', 'img/adulto-man.jpg')
            } else if (idade >= 46 && idade <= 65) {
                genero = 'Senhor'
                imagem.setAttribute('src', 'img/senhor-man.jpg')
            } else if (idade > 65) {
                genero = 'Idoso'
                imagem.setAttribute('src', 'img/velho.jpg')
            }
        } else if (formularioSexo[1].checked) {
            if (idade >= 0 && idade < 11) {
                genero = 'Menina'
                imagem.setAttribute('src', 'img/crianca-woman.jpg')
            } else if (idade < 21) {
                genero = 'Jovem Garota'
                imagem.setAttribute('src', 'img/adolescente-woman.jpg')
            } else if (idade >= 21 && idade <= 45) {
                genero = 'Mulher'
                imagem.setAttribute('src', 'img/adulto-woman.jpg')
            } else if (idade >= 46 && idade <= 65) {
                genero = 'Senhora'
                imagem.setAttribute('src', 'img/senhora-woman.jpg')
            } else if (idade > 65) {
                genero = 'Idosa'
                imagem.setAttribute('src', 'img/velha.jpg')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        resultado.appendChild(imagem)
    }
}