const funcaoExterna = () => {
    //revisão de arrays
    const listaDeCarros = ["hilux", "amarok", "L200", "SW4"];

    //iterar por lista de carros e encontrar o que começa com letra L
    /*  for (const carro of listaDeCarros) {
         if ("hilux" === carro) {
             return "Comprei uma hilux"
         }
     }; */

    const funcaoInterna = () => {
        return ("Minha lista de carros personalizada ", listaDeCarros);
    };

    const estudosDeStrings = () => {
        const string = "Eliezer";
        //maiúsculo
        const maiusculo = string.toUpperCase();
        console.log(maiusculo)
        //minusculo
        const minusculo = string.toLowerCase();
        console.log(minusculo);

        //Pegar a letra Z do nome Eliezer
        console.log("Minha letra Z", string[4]);

        //Quero VERIFICAR se uma letra ou palavra existe dentro de uma string
        console.log(string.includes("elie")) //false por causa da letra maiúscula
    };

    estudosDeStrings()
};

const resposta = funcaoExterna();
console.log(resposta)

//ESCOPO DE UMA FUNÇÃO
//Dentro da função o espaço existe apenas dentro daquela função e toda variável ou constante
//pertence apenas àquela função.
//Se você tiver uma função interna, os dados da função externa podem ser acessados pela função interna.

//USO DE RETURN
// Depois de usado toda a função abaixo dele fica inutilizável.
// Para pegar o valor do return é necessário escrever uma variável do tipo:
// const resposta = funcaoExterna();
//funcaoExterna() possui a funcaoInterna que possui por sua vez um return;