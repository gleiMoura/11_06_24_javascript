//Funções de dar nome;
function darApelido(apelido) {
    console.log(`Seu apelido é ${apelido}`)
};

/* darApelido('Japinha') */

//arrow function
const darSobrenome = (sobrenome) => {
    console.log(`Seu sobrenome agora é ${sobrenome}`)
};

/* darSobrenome("Moura") */

const fazerUmArray = (nomeAdicional, listaAdicional) => {
    const arrayNomes = ["julia", "pedro", "cain", "abel"]; //array de strings
    const arrayIdades = [28, 35, 200, 20, [9, 10, 3]];

    console.log(arrayIdades[4][0]); //forma de pegar um elemento dentro de uma array complexo (array dentro de array)


    /* let nomeEscolhido = arrayNomes[1]; */

    //supondo que não sabemos a posição do pedro. E agora, como achamos ele?

    for (let i = 0; i < arrayNomes.length; i++) {
        if (arrayNomes[i] === "pedro") {
            console.log("Achei!!!")
            console.log(`A posição do pedro é ${i}`)
        }
        /* console.log(arrayNomes[i]) */
    }

    //arrayNomes.length pega o número de elementos do array (4);

    //Como colocamos novos nomes dentro do array?
    arrayNomes.push(nomeAdicional) //coloca novo nome dentro do Array
    /*  console.log("Lista ---->", arrayNomes); */

    //E se eu quiser colocar uma lista inteira de novos nomes dentro 
    //do array que eu já tenho?

    //método complicado
    for (let i = 0; i < listaAdicional.length; i++) {
        arrayNomes.push(listaAdicional[i]);
    }

    /* console.log("Lista nova ---->", arrayNomes) */
    //método simples
    arrayNomes.push(...listaAdicional); //os 3 pontos colocam os elementos dentro da lista sem colocar a lista inteira dentro da lista.

    /* console.log("Lista novíssimo, sério essa é muito nova --->", arrayNomes) */
};

fazerUmArray("Joaquim", ["juju", "tiago", "joão", "suzana", "son goku"]);

//Para pegar uma lista de nomes (classes) você pode usar a função classList
