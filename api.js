const express = require('express');
const app = express();
const db = require("./database.js");
// calculos
const { cobertura,
  fullCobertura,
  bajaCobertura,
  megaCobertura,
  fullCoberturaSD,
  superAvance,
  oders } = require('./calculator')

app.use(express.json());

// Server port
const PORT = process.env.port || 3050;
// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Root endpoint bienvenida como body texto
app.get('/', (req, res) => {
  res.send('Bienvenido a API seguros!');
});

// CRUD
// All
app.get('/vendidos', (req, res) => {
  const sql = 'SELECT * FROM ProductSold';
  // clear console
  process.stdout.write('\033c');

  db.all(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
      listar(results);
    } else {
      res.send('Not result');
    };
  });
});

// Add
app.post('/agregar', (req, res) => {
  const data = {
    name: req.body.name,
    sellIn: req.body.sellIn,
    price: req.body.price
  };
  // clear console
  process.stdout.write('\033c');

  const params = [data.name, data.sellIn, data.price];
  const sql = 'INSERT INTO ProductSold (name, sellIn, price) VALUES (?,?,?)';

  db.run(sql, params, error => {
    if (error) throw error;
    console.log('Seguro creado!');
    console.log('nombre , sellIn , price');
    console.log(data.name, ", ", data.sellIn, ", ", data.price);
    res.send(`Seguro creado! ${data.name}, ${data.sellIn}, ${data.price} `);
  });
});

// Evaluate products
app.get('/evaluateProducts/:days', (req, res) => {
  const sql = 'SELECT * FROM ProductSold';
  const { days } = req.params;
  // clear console
  process.stdout.write('\033c');

  db.all(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.send("Resultados listos por consola");
      calcular(results, days);
    } else {
      res.send('Not result');
    };
  });
});

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
  process.stdout.write('\033c');
});

function listar(results) {
  console.log('nombre , sellIn , price');
  results.forEach(element => {
    console.log(element.name, ',', element.sellIn, ',', element.price);
  });
  return;
}

function calcular(results, days) {
  for (let i = 0; i < days; i++) {

    console.log(`-----------${i}-----------`);
    console.log('nombre , sellIn , price');

    results.forEach(element => {

      switch (element.name) {
        case 'Cobertura':
          cobertura(i, element.name, element.sellIn, element.price);
          break;

        case 'Full cobertura':
          fullCobertura(i, element.name, element.sellIn, element.price);
          break;

        case 'Baja cobertura':
          bajaCobertura(i, element.name, element.sellIn, element.price);
          break;

        case 'Mega cobertura':
          megaCobertura(i, element.name, element.sellIn, element.price);
          break;

        case 'Full cobertura super duper':
          fullCoberturaSD(i, element.name, element.sellIn, element.price);
          break;

        case 'Super avance':
          superAvance(i, element.name, element.sellIn, element.price);
          break;

        default:
          oders(i, element.name, element.sellIn, element.price);
      };
    });
  }
  return;
}
