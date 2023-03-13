import env from "../helpers/env";
import mysql from 'mysql2';

const db = mysql.createConnection({
  host:env.HOST,
  user:env.UNAME,
  password:env.PASS,
  database:env.DB
})

db.connect((err) => {
  if(err) return console.log('error?', err);
  return console.log('Database is Connected');
})

export default db