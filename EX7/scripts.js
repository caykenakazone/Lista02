var texto = window.prompt('Insira uma frase');
var letra = window.prompt('Insira uma letra');

var inicial = letra.charAt(0);
var sep = texto.split(' ');

for(var i = 0; i<sep.length; i++){
    if(sep[i].charAt(0) == inicial){
        document.write(`${sep[i]} `)
    }
}
