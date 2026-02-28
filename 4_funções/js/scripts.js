// 1 - Criando uma função
function minhaFuncao(){
    console.log("Testando");
}

minhaFuncao();

const minhaFucaoEmVariavel = function() {
    console.log("Função em variável!");
}

minhaFucaoEmVariavel();

function funcaoComParametro(txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Opa");

// 2 - Return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2){
    return n1 + n2;      //30
}

const resultado = soma(a,b);
console.log(resultado);

// 3 - Escopo de função
function testandoEscopo() {
let y = 20;
console.log(`Y dentro da função: ${y}`);
}

let y = 30; //Para evitar o erro - Variável fora da função
testandoEscopo();

console.log(`Y fora da função: ${y}`);

// 4 - Escopo Aninhado
let m= 20;

function escopoAninhado(){

    if (true) {
        let m = 30;
        console.log(m);
    }
    console.log(m);

}

escopoAninhado();

console.log(m);

// Arrow function

const testeArrow = ()  => {
    console.log("Esta é uma Arroe function");
}
testeArrow();

const parOuImpar = (n) => {
    if(n % 2 === 0){
        console.log("Par");
        return;
    }
    console.log("Impar");
};

parOuImpar(5);
parOuImpar(6);

// 6 - Mais sobre Arrow Function
const raizQuadrada = (x) => {
    return x * x;
}

const raizQuadrada2 = (n) => n * n;

console.log(raizQuadrada(4));
console.log(raizQuadrada2(4));

const helloWorld = () => console.log("Hello!");

helloWorld();

// 7 - Parametro Opcional
const  multiplication = function(n, m) {
    if (m === undefined) {
        return n * 2;
    } else {
        return n * m;

    }

};

console.log(multiplication(4,4)); //16
console.log(multiplication(4)); // 8 ( pois 4 * 2)

const greeting = (name) => {
    if(!name){
        console.log("Olá!");
        return;
    }
    console.log(`Olá ${name}`);
};

greeting();
greeting("claudio");

// 8 - Valor default 
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
};

console.log(customGreeting("Roberto"));
console.log(customGreeting("Claudio", "Bom Dia"));

const repeatText = (text, repeat = 2 ) => {
    for (let i=0; i < repeat; i++){
        console.log(text);
    }
};

repeatText("Testando");
repeatText("Agora repete 5 vezes", 5);

// 9 - Closure
function someFunction(){
    let txt = "Alguma coisa";
    
    function display(){
        console.log(txt);
    };
    display();
};

someFunction();

// 10 - Mais sobre Closure
const multiplicationClosure  = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

//  11 - Recursão 
const untilTen = (n,m) => {
    if(n < 10){
        console.log("A função parou de executar!");
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(100, 7);

