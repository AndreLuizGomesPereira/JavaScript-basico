let num = ["Homem", "Emilly", "32 Anos", "Casado", "0"]

// console.log(`Meu vetor tem ${num.length} posições e o terceiro número é o ${num[3]}`)

// for (let i = 0; i < num.length; i++) { // Estrutura muito utilizada, porem não é a mais fácil
//     console.log(`Os números são: ${num[i]}`)
// }

for (let i in num) { // Modo de simplificar o metodo for
    console.log(`${num[1]} é um ${num[0]} de ${num[2]}, ${num[3]} e que tem ${num[4]} filhos(s)`)
}

console.log(num.indexOf('Casado'))