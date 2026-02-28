// 1 - Number
console.log(typeof 2);
console.log(typeof 2.2);
console.log(typeof -4);

// 2 - Ops. aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(4 * 5);
console.log(10 / 2);

// 3 - special numbers
console.log(typeof Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4 Strings

console.log("um texto");
console.log('um texto com postrofe');
console.log(`mais um texto com crase`);

console.log(typeof "Opa");

// 5 - Símbolo Especial em Strings

console.log("Testando \n quebra de linha");
console.log("espaçamento \t de tab");

console.log("Oi, " + " tudo " + "bem?");
console.log(`testando` + `concatenação com crase`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
console.log(`Podemos executar qualquer coisa ${console.log("teste")}`);

// 8 - Booleans
console.log (5 > 2);
console.log(30 > 100);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(5 == 5); 
console.log(5 != 4);

// 10 - Idêntico e Comparações
console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== 5);

//11 - Operadores Lógicas

console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "william" === 1);
console.log(10 > 2 || 5 > 10);
console.log(!50 > 10);

// 12 - Empty Values

console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null === undefined);
console.log(null === false);
console.log(undefined == false);

// 13 - Mudanças de tipos 

console.log(5 * null);
console.log("10" + 1);
console.log(typeof num);
console.log("teste" * "opa");
console.log("10" * 10);

const texto = "Gol";
const comemoracao = texto.repeat(5);
console.log(comemoracao);






