function cobertura(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = price - i;
  if (sellIn < 0) {
    price = price - (i - 1);
  }
  if (price < 0) {
    price = 0;
  }
  if (price > 100) {
    price = 100;
  }
  console.log(name, ',', sellIn, ',', price);
  return (name + ', ' + sellIn + ', ' + price);
}

function fullCobertura(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = price + i;

  if (price < 0) {
    price = 0;
  }
  if (price > 100) {
    price = 100;
  }
  console.log(name, ',', sellIn, ',', price);
  return (name + ', ' + sellIn + ', ' + price);
}

function bajaCobertura(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = price - i;
  if (sellIn < 0) {
    price = price - (i - 1);
  }
  if (price < 0) {
    price = 0;
  }
  if (price > 100) {
    price = 100;
  }
  console.log(name, ',', sellIn, ',', price);
  return (name + ', ' + sellIn + ', ' + price);
}

function megaCobertura(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = 180;
  if (sellIn <= 0) {
    sellIn = 1;
  }
  if (price < 0) {
    price = 0;
  }
  console.log(name, ',', sellIn, ',', price);
  return (name + ', ' + sellIn + ', ' + price);
}

function fullCoberturaSD(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = price + i;

  if (sellIn <= 10 && sellIn > 5 && i > 0) {
    price = price + i;
  }
  if (sellIn <= 5 && i > 0) {
    price = price + (2 * i)
  }
  if (price < 0 || sellIn <= 0) {
    price = 0;
  }
  if (price > 100) {
    price = 100;
  }
  console.log(name, ',', sellIn, ',', price);
  return (name + ', ' + sellIn + ', ' + price);
}

function superAvance(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = price - (i * 2);
  if (sellIn < 0) {
    price = price - (i - 1);
  }
  if (price < 0) {
    price = 0;
  }
  if (price > 100) {
    price = 100;
  }
  console.log(name, ',', sellIn, ',', price);
  return (name + ', ' + sellIn + ', ' + price);
}

function oders(i, name, sellIn, price) {

  sellIn = sellIn - i;
  price = price - i;
  if (sellIn < 0) {
    price = price - (i - 1);
  }
  if (price < 0) {
    price = 0;
  }
  if (price > 100) {
    price = 100;
  }
  console.log(name, ',', sellIn, ',', price, 'No existen reglas especiales para este seguro');
  return (name + ', ' + sellIn + ', ' + price + ' No existen reglas especiales para este seguro');
}

module.exports = {
  cobertura,
  fullCobertura,
  bajaCobertura,
  megaCobertura,
  fullCoberturaSD,
  superAvance,
  oders
}
