nome = prompt("Qual seu nome completo?")
qtd = 0;
if(nome.search(` `)>0){
    for(i=0;i<nome.length;i++){
        if(nome.charAt(i)!=' '){
            qtd++;
        }
    }
    document.write(`Seu nome tem ${qtd} caracteres`)
}else{

    document.write(`Seu nome tem ${nome.length} caracteres`)
}