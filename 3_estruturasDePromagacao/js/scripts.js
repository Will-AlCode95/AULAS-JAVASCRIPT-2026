// 1 - Variáveis
let nome = "william";
console.log(nome);

nome = "Claudio Roberto";
console.log(nome);

const IDADE = 31;
console.log(IDADE);

console.log(typeof nome);
console.log(typeof IDADE);

// 2 - Mais sobre Variáveis
let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleto = "Claudio Alves";
const nomeCompleto = "Roberto Silva";

console.log(nomecompleto, nomeCompleto);

let _teste = "Válido";
let $teste = "válido";
console.log(_teste, $teste);

// 3 - Prompt
const age = prompt("digite sua idade: ");
console.log(`Você tem ${age} anos!`);

// 4 - Alert
alert("testando");

const z = 10;
alert(`o numero é ${z}`);

// 5 - MATH

console.log(Math.max(5,2,1,20));
// console.log(Math.floor(5.14)); #arredondamento para cima
// console.log(Math.ceil(5.14)); #arredondamento para cima

// 6 - Console 
console.log("teste");
console.error("Erro!");
console.warn("Aviso");

// 7 - Estrutura de Controle if

const M = 10;

if (M > 5){
    console.log("M maior que 5!");
}//fim do if do M

const USER = "William";

if ( USER === "William") {
    console.log("Olá João");
}

//8 - Else
const loggedIn = false;

if (loggedIn){
    console.log("Usuário Autenticado");
} else {
    console.log("Usuário não Autenticado ");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20){
    console.log("Números mais altos!");
}  else {
    console.log("números não são altos suficientes!");
}

// 9 - else if
if (1 > 2 ){
    console.log("Teste");
} else if ( 2 > 3){
    console.log("teste 2");
} else if (5 > 1){
    console.log("Agora sim!");
}

const userName = "Claudio"
const userAge = 23;

if (userName === "Claudio"){
    console.log("Bem vindo Claudio!");
} else if ( userName === "Claudio" && userAge === 23) {
    console.log("olá clau vc tem 23 anos");
} else {
    console.log("nenhuma condição aceita");
}

// 10 - While

let p = 0;

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p++;
}// fecha o while

// 11 - do while
let o = 10;

do {
    console.log(`Valor de o: ${o}`);
     o = o -1; // o--;
} while (o > 11);

// 12 - for

for ( let t=0; t < 10; t++ ) {
    console.log("Repetindo...")
}

let r = 10;
for (r; r > 0; r=r-1) {
    console.log(`O r está diminuindo: ${r}`);
}

console.log(r);

// 13 - identação
for(let u=0; u<10; u++){
    if(u*2 > 10){
        console.log(`Maior que 10! ${u}`);
    } else {
        if ( u /2 === 0){
            console.log("deu 0");
        } // fim do if interno
    } // fim do else
} // fim do for

// 14 - break

for (let g = 20; g > 10; g--){
    console.log(`O g é: ${g}`);

    if (g === 12) {
        console.log("chegamos 12");
        break;
    }// fim do if
}// fim do laço for

// 15 - continue
for (s = 0; s < 10; s++) {
    if( s % 2 === 0 ) {
        console.log("numero par!");
        continue;
    }
    console.log(s);
}

// 16 - Switch

const job = "Advogado";

switch (job) {
    case "Programdor":
        console.log("você é um programador");
        break;
    case "Advogado":
        console.log("voce é um advogado");
        break;
    case "engenheiro":
        console.log("voce é um engenheiro");
        break;
    default:
        console.log("profissão não encontrada");
}//fecha o switch

// 16 - B - Switch errado
const l = 100;

switch(l){
    case 200:
        console.log("L é 200!");
        
    case 100:
        console.log("L é 100!");
    case 10:
        console.log("L é 10");

    default:
        console.log("L não foi encontrado");
}//fim do switch