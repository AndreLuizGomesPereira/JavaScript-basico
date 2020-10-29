var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} Horas.`)

if (hora < 12 && hora > 5) {
    console.log('Bom dia!')
} else if (hora > 11 && hora < 19) {
    console.log('Boa tarde')
} else if(hora > 18 && hora < 1){
    console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}