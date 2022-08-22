nome= prompt("Qual o seu primeiro nome?");
sobrenome = prompt("Qual o seu sobrenome?")
cor = prompt("Qual cor deseja ver seu nome?")
var qtd = prompt('Quantas vezes quer ver seu nome?')
for (i=0; i<=qtd-1; i++){
    if(i%2==0){
        document.write(`<p style="color:black;">${nome} ${sobrenome}</p>`)
    }
    else if(i%2==1){
        document.write(`<p style="color:${cor};">${nome} ${sobrenome}</p>`)
    }
}

