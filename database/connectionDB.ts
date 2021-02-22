import {Sequelize} from 'sequelize';
import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config();


// const db = new Sequelize('nodeTypeScript', 'root', process.env.passDB, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: 8889
//   // logging: false,
// });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  port: 8889,
  password: process.env.passDB,
  database: 'nodeTypeScript',
  
})

export default db;