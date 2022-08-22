var texto = prompt('Insira um texto: ');
var sep = texto.split(' ');

sep.sort((a, b) => a.localeCompare(b));
var temp = ''


sep.forEach(v => {
    if (v.charAt(0) != temp) {
        temp = v.charAt(0)
        document.write(`Palavras com ${temp}`)
    }
    document.write(`<li>${v}</li>`)
})