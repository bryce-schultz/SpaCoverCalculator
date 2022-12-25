import { database_file } from "../../constants/paths";

var sqlite3 = require('sqlite3');

export default function getDatabase()
{
  var db = new sqlite3.Database(database_file);
  return db;
}

/*
db.serialize(() => 
{
  // Create a table
  db.run("CREATE TABLE IF NOT EXISTS Foo (id INTEGER PRIMARY KEY, name TEXT)");
  // Insert data into the table
  db.run("INSERT INTO Foo (name) VALUES ('bar')");
  // Query data from the table
  db.each("SELECT id, name FROM Foo", (err, row) => 
  {
  console.log(row.id + ": " + row.name);
  });
});

db.close();
*/