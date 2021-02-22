import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'
dotenv.config();


const db = new Sequelize('nodeTypeScript', 'root', process.env.passDB, {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889
  // logging: false,
});

export default db;