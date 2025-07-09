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
    // exercicio 3
function verificarTexto(){
    let texto1 = document.getElementById("texto").value;
    let textoTamanho = texto1.length;
    document.getElementById("resultado3").innerText = "resultado: " + (textoTamanho);
}

}