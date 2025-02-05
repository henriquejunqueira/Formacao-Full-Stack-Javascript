/* 
    Tipos de dados:
    - string
    - number
    - boolean
    - array
    - object
    - undefined
    - null
*/

// ? string
let nome = 'Henrique';
console.log(nome);

// ? string - concatenada
let sobrenome = 'Junqueira';
// console.log(nome + ' ' + sobrenome);

// ? string literal
console.log(`${nome} ${sobrenome}`);

let idade = 30;
console.log(idade);
console.log(idade + 10); // 40

// ? number
// let idade = '30';
// console.log(idade + 10); // 3010 por conta das aspas envolvendo o 30

// ? number - float
let porcentagem = 10.2;
console.log(porcentagem + '%');

// ? boolean (true ou false)
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);

// ? array
let habilidades = ['Javascript', 'PHP', 'Python'];
console.log(habilidades); // retorna todos os itens do array

// retorna quantos itens tem no array
console.log(habilidades.length);

// console.log(habilidades[0]); // retorna o item da posição 0 (zero) do array
// console.log(habilidades[4]); // retorna undefined pois não existe nenhum item na posição 4 do array
// console.log(habilidades[3]); // retorna undefined pois não existe nenhum item na posição 3 do array
console.log(habilidades[2]); // retorna o item da posição 2 (dois) do array

// ? object
let pessoa = {
  nome: 'Henrique',
  sobrenome: 'Junqueira',
  idade: 25,
  habilidades: ['Java', 'Nodejs', 'React'],
};

// console.log(pessoa); // retorna todos os atributos do objeto
// console.log(pessoa.sobrenome); // retorna o atributo sobrenome do objeto
console.log(pessoa.habilidades[0]); // retorna o atributo habilidade de posição 0 (zero) do array do objeto

// JSON (Javascript Object Notation)

// ? undefined (indefinido)
let endereco;
console.log(endereco); // retorna undefined pois não existe valor atribuído à variável endereço

// ? null (nulo)
let cidade = null;
console.log(cidade); // retorna o valor nulo
