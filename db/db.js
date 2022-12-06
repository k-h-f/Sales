import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs';

// setup a new database
const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: 'data/database.sqlite',
  logging: false,
});

const phones = sequelize.define('phones', {
  model_id: DataTypes.INTEGER,
  model_name: DataTypes.STRING,
  brand: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  country: DataTypes.STRING,
});

sequelize.sync();

phones.create({
  model_id: 1,
  model_name: 'iPhone 14',
  brand: 'Apple',
  price: 123,
  country: 'GB',
});

console.log(phones === sequelize.models.phones); // true

// const initSql = fs.readFileSync('db/init.sql').toString();

// // HOWTO run a raw query
// const [results] = await sequelize.query(initSql);
// console.log(results);

const [results_two] = await sequelize.query('SELECT * FROM phones');
console.log(results_two);
