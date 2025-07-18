// exercicio 1
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    //alert("Resultado da soma " + (n1 + n2));
    document.getElementById("resultado1").innerText = "resultado " + (n1 + n2);
}

// exercicio 2
function verificar(){
    let idade1 = Number(document.getElementById("idade").value);

    if(idade1 >= 18){

    document.getElementById("resultado2").innerText = "Parabens voce é maior de idade " + (idade1);
}
    else{
        document.getElementById("resultado2").innerText="infelizmente voce é menor de idade " + (idade1);
    }

}
function verificarTexto(){
    let texto1 = document.getElementById("texto").value;
    let textoTamanho = texto1.length;
    document.getElementById("resultado3").innerText = "resultado: " + (textoTamanho);
}
// exercicio 4
function verificarNumero(){
    let num1 = Number(document.getElementById("numero").value);

    if((num1 % 2) == 0 ){

    document.getElementById("resultado4").innerText = "Parabens seu numero é par " + (num1);
}
    else{
        document.getElementById("resultado4").innerText="parabens seu numero é impar " + (num1);
    }

}
function transformarTexto(){
    let texto1 = document.getElementById("textoMaic").value;
    let textoCaixaAlta = texto1.toUpperCase();
    document.getElementById("resultado5").innerText = "resultado: " + textoCaixaAlta;
}
function compararNumero(){
    let num1 = Number(document.getElementById("numComp").value);
    let num2 = Number(document.getElementById("numComp2").value);


    if(num1 > num2 ){

    document.getElementById("resultado6").innerText = "o numero " + (num1) + "é maior que o " + (num2);
}
    else if(num2 > num1){
        document.getElementById("resultado6").innerText = "o numero " + (num2) + "é maior que o " + (num1);
    }
    else if(num2 == num1){
        document.getElementById("resultado6").innerText = "o numero " + (num2) + " é igual " + (num1);
    }
}
function tabuadaNumero() {
    let numero = Number(document.getElementById("contagem").value);
    let tabuada = "";

    for (let i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    document.getElementById("resultado7").innerText = tabuada;
}
function contador() {
    let numero = 1;
    let contador = 0;


    for (let i = 1; i <= 10; i++) {
        contador += numero + " + " + i + " = " + (numero + i) + "\n";
    }

    document.getElementById("resultado8").innerText = contador;
}
function tirarMedia(){
    let num1 = Number(document.getElementById("nota1").value);
    let num2 = Number(document.getElementById("nota2").value);
    let num3 = Number(document.getElementById("nota3").value);
    let media = (num1 + num2 + num3) / 3;
    if(media >= 6 ){

        document.getElementById("resultado9").innerText = "aluno aprovado" + media.toFixed(2);
    }
        else if (media < 6){
            document.getElementById("resultado9").innerText = "aluno reprovado" + media.toFixed(2);
        }
}
function converterTemperatura(){
    let tempC = Number(document.getElementById("temperatura").value);
    let f = (tempC * 9/5) + 32;
        document.getElementById("resultado10").innerText = "a temperatura em fahrenheits é " + f;
    
}
// exercicio 11
function verificarDia() {
    let dia = Number(document.getElementById("diaSemana").value);
    let resultado = "";

    if (dia == 1) {
        resultado = "Domingo";
    } else if (dia == 2) {
        resultado = "Segunda-feira";
    } else if (dia == 3) {
        resultado = "Terça-feira";
    } else if (dia == 4) {
        resultado = "Quarta-feira";
    } else if (dia == 5) {
        resultado = "Quinta-feira";
    } else if (dia == 6) {
        resultado = "Sexta-feira";
    } else if (dia == 7) {
        resultado = "Sábado";
    } else {
        resultado = "Número inválido. Digite um número de 1 a 7.";
    }

    document.getElementById("resultado11").innerText = resultado;
}

// exercicio 12
function verificarSenha() {
    let senha = document.getElementById("senha").value;

    if (senha == "1234") {
        document.getElementById("resultado12").innerText = "Acesso permitido!";
    } else {
        document.getElementById("resultado12").innerText = "Senha incorreta.";
    }
}

// exercicio 13
function contagemRegressiva() {
    let texto = "";

    for (let i = 10; i >= 1; i--) {
        texto += i + " ";
    }

    document.getElementById("resultado13").innerText = texto;
}
