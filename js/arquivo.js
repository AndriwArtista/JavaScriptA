// var n respeita o bloco de codigo
function testeVar(){
    var mensagem = "Ola var";
    if(true){
        var mensagem = "troquei a mensagem!";
        console.log(mensagem);
    }
    console.log(mensagem);
}
testeVar();
// let respeita o scopo de bloco
function testeLet(){
    let mensagem =  "ola com Let"
    if(true){
        let mensagem = "menasgem nova no bloco if";
        console.log(mensagem);

    }
    console.log(mensagem);
}
testeLet();
var x1 = 10;
var x1 = 20;
console.log(x1);

var x3;
console.log(x3);
//console.log(x4);

let x2 = 4;
//let x2 = 7;

console.log(x2);
//Costantes
const _costante = 42;
console.log(_costante);

const array = [1, 2 ,4];
array.push(7);
console.log(array);

const pessoa = {nome: "jair", idade:25};
console.log(pessoa);



function saudacao(){
    alert("bem vindo ao nosso site")
}