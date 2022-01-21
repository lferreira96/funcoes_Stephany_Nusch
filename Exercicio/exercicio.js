

const alunos = [
	{
		nome: 'José',
		nota: 3,
	},
	{
		nome: 'Sebastião',
		nota: 9,
	},
	{
		nome: 'Zezinho',
		nota: 6,
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];
    let reprovados = [];
    let ttAprovados = 0;
    let ttReprovados = 0;

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
            ttAprovados++;
		}else{
            reprovados.push(nome);
            ttReprovados++;
        }
	}
    console.log(ttAprovados);
    console.log(ttReprovados);
    console.log(reprovados);
    
	return aprovados;
}

console.log(alunosAprovados(alunos, 5));


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));