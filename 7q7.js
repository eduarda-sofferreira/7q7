var palavra = prompt("Digite uma palavra:")
var inversa = ""

for (var i = palavra.length - 1; i >= 0; i--) {
    inversa += palavra[i]
}

console.log("A palavra invertida é: " + inversa)
