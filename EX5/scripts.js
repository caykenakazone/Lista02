function countWords(str) {
    const arr = str.split(' ');
    return arr.filter(word => word !== '').length;
    }
text = prompt('Digite abaixo algum texto: ')
contador = countWords(text)
alert('Seu nome tem '+contador+' palavras')