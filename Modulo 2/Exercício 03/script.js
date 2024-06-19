

 var numeroInicial = prompt('informe o primeiro numero') ;

 var sinal = prompt('informe o sinal da sua operação');

while (sinal != '-' && sinal != '+' && sinal != '/' && sinal != '*') {
    alert('Por favor informe a sinal válido!');
    sinal = prompt('informe o sinal da sua operação');

}

 var numeroFinal = prompt('informe o numero final');

//funções para converter uma string para numero.
 numeroInicial = parseInt(numeroInicial);
 numeroFinal = parseInt(numeroFinal);


 var resultadoFinal = 0;
 if(sinal == '+'){
    resultadoFinal = numeroInicial + numeroFinal;
 }else if(sinal == '-'){
    resultadoFinal = numeroInicial - numeroFinal;
 }else if(sinal == '/'){
    resultadoFinal = numeroInicial / numeroFinal;
 }else if(sinal == '*'){
    resultadoFinal = numeroInicial * numeroFinal;
 }

 alert('o resultado final é: ' + resultadoFinal);

