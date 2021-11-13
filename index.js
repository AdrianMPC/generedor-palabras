// Módulo necesario para el uso de prompt
const prompt = require('prompt-sync')();

// Función auxiliar para evitar repeticion de código
function genRandomPass(lenght, pass, caracters) {
  for (let i = 0; i < lenght; i++) {
    pass += caracters.charAt(Math.floor(Math.random() * caracters.length));
  }
  // atchar() en combinación con Math, agregando un indice aleatorio
  console.log('La contraseña sugerida es: ' + pass)
}


// Funcion que genera la contraseña
function generateRandom(len) {
  // Checquea si es numero o no
  if (isNaN(len)) {
    return '!ERROR! ¡Usa números!';
  }

  // variable vacía para guardar la palabra
  let randomPass = '';
  alert('Las bases soportadas por el programa son:\nDecimal\nBinario\nOctagonal\nSexagesimal')
  let base = prompt('Base: ');
  base = base.toLowerCase()

  // Selección de caracteres
  switch (base) {
    case "decimal":
      let wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789'
      genRandomPass(len, randomPass, wordChars);
      break;
    case "binario":
      let wordChars = 'abcdefghijklmnopqrstuvwxyz01'
      genRandomPass(len, randomPass, wordChars);
      break;
    case "octagonal":
      let wordChars = 'abcdefghijklmnopqrstuvwxyz01234567'
      genRandomPass(len, randomPass, wordChars);
      break;
    case "sexagesimal":
      let wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEF'
      genRandomPass(len, randomPass, wordChars);
      break;
    default:
      console.log('Porfavor escriba: Decimal, Binario, Octagonal o Sexagesimal')
      randomPass = 'INVALIDO'
      break;
  }

  // Selección de caracteres - OLD
  // if (base === "decimal") {
  //   let wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  //   genRandomPass(len,randomPass,wordChars);
  // } else if (base === "binario") {
  //   let wordChars = 'abcdefghijklmnopqrstuvwxyz01'
  //   genRandomPass(len,randomPass,wordChars);
  // } else if (base === "octagonal") {
  //   let wordChars = 'abcdefghijklmnopqrstuvwxyz01234567'
  //   genRandomPass(len,randomPass,wordChars);
  // } else if (base === "sexagesimal") {
  //   let wordChars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEF'
  //   genRandomPass(len,randomPass,wordChars);
  // } else if (base !== "decimal" || "binario" || "octagonal" || "sexagesimal") {
  //   console.log('Porfavor escriba: Decimal, Binario, Octagonal o Sexagesimal')
  //   randomPass = 'INVALIDO'}
}

//input y limite de num
const num = prompt('Largo de la contraseña: ');
if (num < 4) {
  console.log('ERROR! Mínimo: 4; Máximo: 10')
} else if (num > 10) {
  console.log('ERROR! Mínimo: 4; Máximo: 10')
} else if (4 < num < 10) {
  generateRandom(Number(num))
  // largo de contraseña
}







