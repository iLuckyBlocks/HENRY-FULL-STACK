'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //num = '1010' split() --> [1,0,1,0] reverse() --> [0,1,0,1]
  //Sum 2^Posicion * valor
  // split => lo que hace es agarrar todos los valor STRING y hacerlos un arreglo
  // reverse => agarra el arreglo y cambia las posiciones al revez 
  num = num.split('').reverse();
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += Math.pow(2,i) * parseInt(num[i]); //2^0 * 0;
  }
 
  return result;

}

function DecimalABinario(num) {
  // tu codigo aca
  //dividir el num  / 2 hasta llegar a 0
  let result=[];

  while (num > 0) {
    result.push(num%2);
    //funcion que redondea hacia abajo -> floor
    //funcion que redondea hacia arriba -> ceil
    num = Math.floor(num/2);

  }
  //metodo join para agarrar los valores del arreglo y volverlos string
  return result.reverse().join('');  //[0,1,1,1] -> '0111'

}


console.log("pinga");

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

