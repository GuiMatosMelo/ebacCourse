
/* Era uma vez um fazendeiro que foi ao mercado e comprou um lobo, um carneiro e uma alface.
No caminho para casa, o fazendeiro chegou à margem de um rio e arrendou um barco.
 Mas, na travessia do rio por barco, o agricultor poderia levar apenas a si mesmo e uma única de suas compras
 o lobo, o carneiro, ou a alface.

Se fossem deixados sozinhos em uma mesma margem, o lobo comeria o carneiro e o carneiro comeria a alface.

O desafio do fazendeiro é atravessar a si mesmo e as suas compras para a margem oposta do rio,
deixando cada compra intacta. Como ele fará isso? */



/*

1º Passo - Levar a cabra ao outro lado do rio;
2º Passo - Voltar e pegar o Lobo e levar ao outro lado do rio;
3º Passo - Deixar o lobo no leito do rio correto e trazer a cabra junto para buscar a alfafa;
4º Passo - Deixar a Cabra no lado indesejado e levar a alfafa;
5º Passo - Deixar a Alfafa junto ao lobo;
6º Passo - Voltar e pegar o cabra;
7º Passo - Voltar ao lado desejado e pronto, todos estarão lá.

*/

Window.alert('Feito somente para subir no git.')


let barco = [];
let leitoInicial = [];
let leitoFinal = [];
let tigre = "tigre";
let cabra = "cabra";
let alfafa = "alfafa";

leitoInicial.push(tigre,cabra,alfafa,barco);
console.log(leitoInicial);

//1.0 - Primeiro passo levar a cabra ao outro lado
//1.1 Tirar a cabra do leitoInicial e levar ao barco.
barco.push(cabra);
leitoInicial.splice(leitoInicial.indexOf('cabra'), 1 );

//1.2 Levar o barco ao leitoFinal;
leitoFinal.push(barco);
leitoInicial.splice(leitoInicial.indexOf('barco'), 1);

//1.3 Tirar a cabra do barco.
leitoFinal.push(cabra);
barco.splice(barco.indexOf('cabra'), 1);

//1.4 Voltar com o barco ao leitoInicial.
leitoInicial.push(barco);
leitoFinal.splice(leitoFinal.indexOf(barco),1);

//2.0 Segunda viagem, levar o tigre ao outro lado e trazer a cabra de volta.

barco.push(tigre);
leitoInicial.slice(leitoInicial.indexOf(tigre));
leitoFinal.push(barco);
leitoInicial.slice(leitoInicial.indexOf(barco));
leitoFinal.push(tigre);
barco.splice(barco.indexOf('tigre'), 1);
barco.push(cabra);
leitoFinal.splice(barco.indexOf('cabra'), 1);

leitoInicial.push(barco);
leitoFinal.splice(leitoFinal.indexOf(barco),1);

leitoInicial.push(cabra);
barco.splice(leitoFinal.indexOf(cabra),1);
barco.push(alfafa);
leitoInicial.splice(leitoFinal.indexOf(alfafa),1);

leitoFinal.push(barco);
leitoInicial.splice(leitoInicial.indexOf(barco),1);

leitoFinal.push(alfafa);
barco.splice(barco.indexOf(alfafa),1);

leitoInicial.push(barco);
leitoFinal.splice(leitoFinal.indexOf(barco),1);

barco.push(cabra);
leitoInicial.splice(leitoInicial.indexOf('cabra'), 1 );

leitoFinal.push(barco);
leitoInicial.splice(leitoInicial.indexOf('barco'), 1);

leitoFinal.push(cabra);
barco.splice(barco.indexOf('cabra'), 1);

console.log(leitoFinal);
console.log(barco)




