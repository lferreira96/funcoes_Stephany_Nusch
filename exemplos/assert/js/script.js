/* const calc = function(operacao, num1, num2){
    alert ('calc');
	return operacao(num1, num2);
}
const soma = function(num1, num2){
    alert ('soma');
	return num1 + num2;
}
const subtracao = function(num1, num2){
    alert ('subtracao');
return num1 - num2;
}

const resultSoma = calc(soma,1,2);
const resultSub = calc(subtracao,1,2);

console.log(resultSoma);
console.log(resultSub);
 */

/* function findMax(){
    let max = -Infinity;
    for(let i = 0; i< arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(findMax(100,150,1,2,3,6,90,180)); */
/* function sum(x,y,z){
    return x + y + z;
}
const numbers = [1,2,3];

console.log(sum(...numbers)); */
/* function confereTamanho(...args){
    console.log(args.length);
}
confereTamanho(); //0
confereTamanho(1, 2); //2
confereTamanho(3, 4, 5); //3 */

/* const user = {
    id:42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({id}){
    return id;
}

function getFullName({fullName: {firstname: first, lastName: last}}){
    return `${first} ${last}`;
}
userId(user); //42
getFullName(user); // John Doe */

/* const pessoa = {
	firstName: 'André',
	lastName: 'Soares',
id: 1,
fullName: function(){
return this.firstName + ' ' + this.lastName;
	},
getId: function(){
return this.id;
	}
}
console.log(pessoa.fullName()); */
/* 
const pessoa = {
    nome : 'Leonardo',
};

const animal = {
    nome : 'Betina',
};

function getSomething(){
    console.log(this.nome);
}
getSomething.call(animal);

const myObj ={
    num1:2,
    num2:4,
}
function soma(a,b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(myObj,1,5);
*/

/* 
this.x = 9; //this aqui se refere ao objeto global "window" do navegador
var module = {
    x: 81,
    getX: function() { 
        console.log('dentro do function getx');
        return this.x; 
    },
    y: 32,
    gety: function() { 
        console.log('dentro do function gety');
        return this.y;  
    }    
};
 
// Retornará o que está dento do módulo, só pelo simples fato de ter os ()
console.log(module.getX()); // 81

console.log(module.gety()); // 32

// Retornará o que está fora do módulo, só pelo simples fato de não ter os (), para pegar o valor de dentro do módulo, temos que colocar o .bind igual ao que está no final.
var retrieveX = module.getX;
console.log(retrieveX()); // 9


var retrieveY = module.gety;
console.log(retrieveY()); //undefined pois não tenho nenhum this.y atribuído fora do módulo

// retorna 9 - a função foi invocada no escopo global

// Criando uma nova função com 'this' vinculada ao módulo
// Programadores novatos podem confundir a variável x
// global com a propriedade x do módulo

var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81 */

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));
