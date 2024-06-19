var anoNascimento = prompt("Qual a sua data de nascimento?");


 while (anoNascimento <= 1990) {
    alert("Digite a data correta!");
 }

var anoAtual = prompt("Informe ano atual!");


var idadeFinal = anoAtual - anoNascimento;


alert("Sua idade atual é " + idadeFinal)

/*var anoNascimento = prompt("Por favor informe a sua date de nascimento");


while (anoNascimento <= 1990) {
    alert("Por favor digite a idade correta");
    anoNascimento = prompt("informe seu ano de nascimento");
}

var anoAtual = prompt("Informe o ano atual");


var idadeFinal = anoAtual - anoNascimento;
alert('Sua idade atual é '+ idadeFinal)
*/