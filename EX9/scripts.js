var texto = prompt("Insira uma palavra ou texto");

if (texto == texto.split('').reverse().join('')) {
    document.write("É um palÃ­ndromo!")
} else {
    document.write("Não é um palindromo!!")
}