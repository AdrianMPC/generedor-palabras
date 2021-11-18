// necesario para input
const prompt = require('prompt-sync')();

// genera la contraseña
function generateRandom(len) 
{ 
  //checkea si es numero o no
  if (isNaN(len)) {
    return '!ERROR! ¡Usa números!';
  }
  let randomPass = ''; 
  // variable vacía para guardar la palabra
  let base = prompt('Base: ');
  // carácteres
  if (base === "decimal"){
     let wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789' //conjunto y base
    for(let i = 0; i < len; i++) {
      randomPass += wordChars.charAt(Math.floor(Math.random() * wordChars.length)); 
      // atchar() en combinación con Math, agregando un indice aleatorio
    }
  
  // lo imprime a la consola
  } else if (base === "binario") {
      let wordChars = 'abcdefghijklmnopqrstuvwxyz01' //conjunto y base
    for(let i = 0; i < len; i++) {
      randomPass += wordChars.charAt(Math.floor(Math.random() * wordChars.length)); 
      // atchar() en combinación con Math, agregando un indice aleatorio
    }
  
  } else if (base === "octagonal"){
      let wordChars = 'abcdefghijklmnopqrstuvwxyz01234567' //conjunto y base
    for(let i = 0; i < len; i++) {
      randomPass += wordChars.charAt(Math.floor(Math.random() * wordChars.length)); 
      // atchar() en combinación con Math, agregando un indice aleatorio
    }
    
  } else if (base === "sexagesimal"){
      let wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEF' //conjunto y base
    for(let i = 0; i < len; i++) {
      randomPass += wordChars.charAt(Math.floor(Math.random() * wordChars.length)); 
      // atchar() en combinación con Math, agregando un indice aleatorio
    }  
  } else if (base !== "decimal"||"binario"||"octagonal"||"sexagesimal"){
    console.log('Porfavor escribe: decimal, binario, octagonal o sexagesimal')
    randomPass = 'INVALIDO'
    // desactiva el programa si la base es invalida
  }
  //imprime resultado
  console.log('Tu contraseña es: ' + randomPass)
}

//input y limite de num
const num = prompt('Largo de la contraseña: ');
if (num < 4){
  console.log('ERROR! Mínimo: 4; Máximo: 10')
}  else if (num > 10){
 console.log('ERROR! Mínimo: 4; Máximo: 10')
} else if (4 < num < 10){
  generateRandom(Number(num))
  // largo de contraseña
}







