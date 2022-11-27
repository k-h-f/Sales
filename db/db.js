import { Sequelize } from 'sequelize';
import fs from 'fs';

// setup a new database
const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: '.data/database.sqlite',
  logging: false,
});

const initSql = fs.readFileSync('db/init.sql').toString();

// HOWTO run a raw query
// const [results] = await sequelize.query(initSql);
// console.log(results);

const [results_two] = await sequelize.query('SELECT * FROM products');
console.log(results_two);
