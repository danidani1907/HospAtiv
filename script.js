
class Medicos {
    #idade
    constructor(nome, funcao, idade){

        this.nome = nome;
        this.funcao = funcao;
        this.#idade = idade;
    }

}
class  MedChef extends Medicos{
    medico () { return `olá meu nome é ${ this.nome} e sou chefe em  ${this.funcao} `;}
}
class funcionario extends Medicos{
    Medfunc () {
      return `ola sou ${ this.nome} e trabalho na função de ${this.funcao}.`;}
}

const House = new  MedChef("House", "infectologia"," 53")
const Treze = new funcionario ("Dr. Remy ou 13", "internista", "31")
const Cuddy = new MedChef("Cuddy", " e Administradora do Hospital", "44")
const Wilson= new MedChef("Wilson", "chefe da Oncologia","46")
const Lawrence = new funcionario ("Dr. Lawrence ", "medicina esportiva"," 28")
const Taub = new funcionario ("Dr.Taub", "Cirurgião Plástico","47")
const Cameron = new funcionario ("Dr.Cameron", "imunologista ", "35")
const Capataz = new MedChef ("Dr.Capataz", "Neurologia ","40")
const Chi = new funcionario ("Dr. Parque Chi ", "Residente em Neurologia", "29")
const Chase = new MedChef ("Dr. Chase ", " Medicina Diagnóstica"," 33")


House.medico();
Treze.Medfunc();
Cuddy.medico();
Wilson.medico();
Lawrence.Medfunc();
Taub.Medfunc();
Cameron.Medfunc();
Capataz.medico();
Chi.Medfunc();
Chase.medico();


function exibir(mensagem) {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = mensagem;
    output.appendChild(p);
}
exibir(Cuddy.medico());
exibir(Capataz.medico());
exibir(House.medico());
exibir(Wilson.medico());
exibir(Lawrence.Medfunc());
exibir(Taub.Medfunc());
exibir(Cameron.Medfunc());
exibir(Chase.medico());
exibir(Treze.Medfunc());
exibir(Chi.Medfunc());