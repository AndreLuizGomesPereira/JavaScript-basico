var idade = 65
console.log(`Você tem ${idade} anos então: `)
if (idade < 16) {
    console.log('Não vota.')
} else {
    if (idade >= 16 && idade < 18 || idade > 65) {
        console.log('Votar é opção.')
    } else {
        console.log('Voto obrigátorio.')

    }
}