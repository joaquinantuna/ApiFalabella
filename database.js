const sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
    db.run(`CREATE TABLE ProductSold (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text,
            sellIn integer,
            price integer )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert = 'INSERT INTO ProductSold (name, sellIn, price) VALUES (?,?,?)'
          db.run(insert, ["Cobertura", 10, 20])
          db.run(insert, ["Full cobertura", 2, 0])
          db.run(insert, ["Baja cobertura", 5, 7])
          db.run(insert, ["Mega cobertura", 0, 80])
          db.run(insert, ["Mega cobertura", -1, 80])
          db.run(insert, ["Full cobertura super duper", 15, 20])
          db.run(insert, ["Full cobertura super duper", 10, 49])
          db.run(insert, ["Full cobertura super duper", 5, 49])
          db.run(insert, ["Super avance", 3, 6])
        };
      });
  };
});

module.exports = db
