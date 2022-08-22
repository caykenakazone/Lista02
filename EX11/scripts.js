var texto = prompt("Insira um texto");
var p1 = prompt("Insira uma palavra");
var p2 = prompt("Insira outra palavra");

texto = texto.replace(p1, v => p2);

document.write(texto);
