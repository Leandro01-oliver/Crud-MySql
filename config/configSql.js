import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_teste',
  password:'L1A2D3O20#'
});


export {connection}