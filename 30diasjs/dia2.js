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

let palabra1 = 'Python';
let palabra2 = 'JavaScript';

console.log(palabra1.includes('Py'));
console.log(palabra2.includes('Py'));

let jerga = 'Espero que este curso no esté lleno de jerga';
console.log(jerga.includes('jargon'));

let numero1 = Math.random() * 100;
console.log(numero1);

let numeroAleatorio = Math.floor(Math.random() * 51) + 50;
console.log(numeroAleatorio);

let numeroAleatorio2 = Math.floor(Math.random() * 256);
console.log(numeroAleatorio2);

let texto = 'JavaScript';
let indice = Math.floor(Math.random() * texto.length);
let caracter = texto.charAt(indice);

console.log(indice);
console.log(caracter);
console.log(texto.charCodeAt(indice));

console.log(
  '1\t1\t1\t1\t1\n2\t2\t2\t2\t2\n3\t3\t3\t3\t3\n4\t4\t4\t4\t4\n5\t5\t5\t5\t5'
);

let oracion2 =
  'No puedes terminar una oración con porque porque porque es una conjunción';
let inicio = oracion2.indexOf('porque porque porque');
let fraseSeparada = oracion2.substring(inicio);
console.log(fraseSeparada);
console.log(oracion2);

let oracion3 =
  'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración';

let cantidad = (oracion3.match(/amor/g) || []).length;
console.log(cantidad);

const sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const textoLimpio = sentence
  .replace(/%/g, '')
  .replace(/@/g, '')
  .replace(/&/g, '')
  .replace(/#/g, '')
  .replace(/;/g, '');

console.log(textoLimpio);

const palabras = textoLimpio.split(' ');
console.log(palabras);

const frecuencia = {};

palabras.forEach(palabra => {
  frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
});

console.log(frecuencia);
