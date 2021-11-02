const assert = require('assert');
const { Console } = require('console');
// calculos
const { cobertura,
  fullCobertura,
  bajaCobertura,
  megaCobertura,
  fullCoberturaSD,
  superAvance,
  oders } = require('./calculator')

// clear console
process.stdout.write('\033c');

// We do not need to import the test functions since
// they are made global variables by test.js

console.log("Reglas globales");
console.log("1 Todos los productos tienen un valor de sellIn, que indica la cantidad de dias que tenemos para vender ese producto.")
console.log("2 Todos los productos tienen un valor price que indica el costo del producto.");
console.log("3 Al final del dia, el sistema debe disminuir los valores de price y sellIn para cada producto.");
console.log("4 Una vez que la fecha de venta ha pasado, sellIn < 0, los precios de cada producto, se degradan el doble de rapido.");
console.log("5 El precio de un producto, nunca es negativo.");
console.log("6 El precio de un producto nunca supera los 100.");
console.log("Reglas específicas");
console.log('7 El producto "Mega cobertura" tiene un precio fijo de 180.');
console.log('8 El producto "Mega cobertura", nunca vence para vender y nunca disminuye su precio.');
console.log('9 El producto "Super avance" disminuye su precio el doble de rapido que un producto normal.');
console.log('10 El producto "Full cobertura" incrementa su precio a medida que pasa el tiempo.');
console.log('11 El producto "Full cobertura Super duper", tal como el "Full Cobertura", incrementa su precio a medida que se acerca su fecha de vencimiento:');
console.log('  El precio se incrementa en 2 cuando quedan 10 dias o menos y se incrementa en 3, cuando quedan 5 dias o menos.');
console.log('  El precio disminuye a 0 cuando se vence el tiempo de venta.');
console.log();
console.log("Todos cumplen reglas 1, 2, 5 y 6");
// test cobertura(dias, name, sellIn, price);
test('"Cobertura" cumple reglas 3 y 4, en 5 dias sellIn y price - 4 (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(cobertura(4, "Cobertura", 10, 20), "Cobertura, 6, 16");
})
// test bajaCobertura(dias, name, sellIn, price);
test('"Baja cobertura" cumple reglas 3 y 4, en 5 dias sellIn y price - 4 en (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(bajaCobertura(4, "Baja cobertura", 5, 7), "Baja cobertura, 1, 3");
})
// test megaCobertura(dias, name, sellIn, price);
test('"Mega cobertura" cumple reglas 7 y 8, en 5 dias sellIn = 1 y price = 180 en (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(megaCobertura(4, "Mega cobertura", -1, 80), "Mega cobertura, 1, 180");
})
// test fullCobertura(dias, name, sellIn, price);
test('"Full cobertura" cumple reglas 4 y 10, en 5 dias sellIn - 4 y price + 4 en (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(fullCobertura(4, "Full cobertura", 2, 0), "Full cobertura, -2, 4");
})
// test fullCoberturaSD(dias, name, sellIn, price);
test('"Full cobertura" cumple regla 11, en 5 dias sellIn - 4 y price + 8 en (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(fullCoberturaSD(4, "Full cobertura super duper", 10, 49), "Full cobertura super duper, 6, 57");
})
// test superAvance(dias, name, sellIn, price);
test('"Super avance" cumple reglas 3 y 4, en 5 dias sellIn - 4 y price - 6 (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(superAvance(4, "Super avance", 3, 6), "Super avance, -1, 0");
})
// test oders(dias, name, sellIn, price);
test('"Otro seguro" cumple reglas 3 y 4, en 5 dias sellIn y price - 7 (dias - 1 pues el primero es 0) ', () => {
  assert.strictEqual(oders(4, "Otro seguro", 1, 7), "Otro seguro, -3, 0 No existen reglas especiales para este seguro");
})
