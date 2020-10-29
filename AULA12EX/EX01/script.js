var mensagem = document.getElementById('mensagem')
var imagem = document.getElementById('imagem')

function carregar() {
    var data = new Date()
    var hora = data.getHours()

    if (hora > 0 && hora < 12) { // Bom dia

        imagem.src = 'img/manha.png'
        document.body.style.background = '#fee655'
        mensagem.innerHTML = `Agora são ${hora} horas. Bom dia!`

    } else if (hora >= 12 && hora < 19) { // Boa tarde
        imagem.src = 'img/tarde.png'
        document.body.style.background = '#8296a9'
        mensagem.innerHTML = `Agora são ${hora} horas. Boa tarde!`

    } else { // Boa noite
        imagem.src = 'img/noite.png'
        document.body.style.background = ' #193352'
        mensagem.innerHTML = `Agora são ${hora} horas. Boa noite!`
    }
}