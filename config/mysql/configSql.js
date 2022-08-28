import mysql from 'mysql2';

// create the connection to database

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'db_teste',
  password:'L1A2D3O20#'
});

//mysql://bd1551148844bc:a26329de@us-cdbr-east-06.cleardb.net/heroku_e0a52f5c91b3e9e?reconnect=true
//usuario:bd1551148844bc
//senha:a26329de
//host:us-cdbr-east-06.cleardb.net
//database:heroku_e0a52f5c91b3e9e
//CLEARDB_DATABASE_URL

export {connection}