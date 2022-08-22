nome = prompt('Qual seu nome completo?')

for (i=0;i<nome.length;i++) {
var word_one = nome.split(' ')[i];
    if(i==0){
        document.write( `${word_one.toUpperCase()} `)
        
    }
    else{
        document.write( ` ${word_one.toLowerCase()} `)

    }
    
}