let desafio = 'Aprender JavaScript en 30 días';
console.log(desafio);
console.log(desafio.length);
console.log(desafio.toUpperCase());
console.log(desafio.toLowerCase());
console.log(desafio.includes('JavaScript'));
console.log(desafio.substring(0, 8));
console.log(desafio.split(' '));

let cadena = '30 dias de javascript';

console.log(cadena.split(' '));
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(empresas.split(', '));

console.log(cadena.replace('javascript', 'Python'));
console.log(cadena.charAt(15));
console.log(cadena.charCodeAt(0));
console.log(cadena.indexOf('javascript'));
console.log(cadena.lastIndexOf('a'));

let oracion =
  'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(oracion);
console.log(oracion.indexOf('porque'));
console.log(oracion.lastIndexOf('porque'));
console.log(oracion.search('porque'));

console.log(cadena.trim());
console.log(cadena.startsWith('30'));
console.log(cadena.endsWith('javascript'));
console.log(cadena.match(/a/g));
console.log(cadena.concat(' y más'));
console.log(cadena.repeat(2));

let frase =
  'The quote "There is no exercise better for the heart than reaching down and lifting people up."The quote "There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.';

console.log(frase);

let madreTeresa =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(madreTeresa);

let diez = '10';

console.log(typeof diez === typeof 10);
console.log(parseInt(diez) === 10); // true, porque '10' se convierte a number

console.log(parseFloat('9.8') === 10);
console.log(Math.round(parseFloat('9.8')) === 10); // true, porque redondeamos 9.8 a 10
