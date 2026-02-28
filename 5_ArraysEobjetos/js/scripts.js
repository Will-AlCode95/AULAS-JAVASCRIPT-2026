// 1 - Arrays

const lista = [1,2,3,4,5];

console.log(lista);
console.log(typeof lista);

const itens = ["Roberto", true, 2, 4.12];
console.log(itens);
// 1 - A - Adicionando itens
lista.push(6);
console.log(lista);
// push(): Adiciona im item ao final da lista

lista.unshift(0);
console.log(lista);
// unshift: adiciona um item no inicio da lista

const itens2 = ["Roberto", true, 2, 4.12];
console.log(itens2);

// pop(): remove o último elemento
itens2.pop();
console.log(itens2);

//  (): Remove o primeiro elemento da lista
itens2.shift();
console.log(itens2)

// 2 - Mais sobre Arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[2]);
console.log(arr[10]);

// 3 - Propiedades

const number = [5, 12, 4, 22];

console.log(number.length);
console.log(number["length"]);

// 4 - Métodos 
const otherNumber = [1,2,3];
const allNumber = number.concat(otherNumber);
console.log(allNumber);

const text = "algum texto";

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// 5 - Objetos - Object Literals
const person = {
    name: "William",
    age: 36,
    job: "Developer",
};

console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e Deletando Propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car);

// 7 - Mas sobre Objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);  // verifica se retorna True

const obj2 = {
    c: [],
};

Object.assign(obj2, obj); //copia um obj para dentro do outro
console.log(obj2);

// 8 - Mais sobre objetos
console.log(Object.keys(obj)); // Retorna o nome das chaves
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
const a = {
    name: "William",
};

const b = a;

console.log(a);
console.log(b);
console.log(a === b);

a.age = 40;
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loops de Arrays

const users = ["Arthur", "Leonardo", "Lucas", "Matheus", "Yuri", "William"];

for (let i=0; i < users.length; i++){
    console.log(`Listando usuário: ${users[i]}`);
};

// 11 - indexof e lastindexof

const myElements = ["Morango", "maçã", "Abacate", "pera", "abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("abacate")]);

console.log(myElements.lastIndexOf("abacate"));
console.log();

// 12 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2,4); //pega posição (2 até a 3);
console.log(subArray);

const subArray2 = testeSlice.slice(2,4 + 1); //pega posição (2 até o 4 pois tem +1 );
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20); //pega posição (10 até o 19);
console.log(subArray3);

const subArray4 = testeSlice.slice(2); //pega posição 2 até o final
console.log(subArray4);

//13 - ForEach - Iteração 
const nums = [1,2,3,4,5];

nums.forEach((n) => {
    console.log(`o número atual é: ${n}`);
} );

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"}
];

posts.forEach((post) =>{
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

//14 - Includes 
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")){
    console.log("há carros da marca BMW!")
}

// 15 - Reverse

const reverseTeste = [1,2,3,4,5];

console.log(reverseTeste);

reverseTeste.reverse();

console.log(reverseTeste);

// 16 - Trim
const trimTest = " testando \n ";
console.log(trimTest.trim());

console.log(trimTest);

console.log(trimTest.trim().length);
console.log(trimTest.length);

// 17 - PadStart e PadEnd
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");
console.log(testePadEnd);

// 18 - Split 
const frase = "O pato piou para o rei de rome";

const arrayDaFrase = frase.split();
console.log(arrayDaFrase);

const arrayDaFrasePorPalavra = frase.split(" ");
console.log(arrayDaFrasePorPalavra);

// 19 - Join 
const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

// 20 repeat

const palavra = "Testando";

console.log(palavra.repeat(5));

// 21 - Rest Operator 
const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
};

console.log(somaInfinita(1,5,10));

console.log(somaInfinita(1,2,3,4,5,6,7,8,9));

// 22 - for ... of
const somaInfinita2 = (...args) => {
    let total = 0;

    for(num of args) {
        total += num;
    }
    return total;

};

console.log(somaInfinita2(1,5,10));

console.log(somaInfinita2(1,2,3,4,5,6,7,7,8,9));

// 23 - destructuring em objetos
const userDetails = {
    firstName: "Ryu",
    lastName: "lojimo",
    job: "Programador",
};

const { firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

//24 - Destructuring em Arrays

const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 25 - JSON
const myJson = '{"name": "Claudio", "age": 60, "skills: ["PHP", "JavaScript", "Python"]}';

// 26 JSON para objeto e Objeto para JSON
const myObject = JSON.parse(myJson);

console.log(myObject);

// JSON Inválido
const badJson = '{"name": Claudio", "age": 20, "skills: ["PHP", "JavaScript", "Python"]}';

// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);


