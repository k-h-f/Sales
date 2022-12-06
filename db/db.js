import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs';

// setup a new database
const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: 'data/database.sqlite',
  logging: false,
});

await sequelize.query(`
  drop table if exists phones; 
  drop table if exists laptops`);

const phones = sequelize.define(
  'phones',
  {
    model_id: DataTypes.INTEGER,
    model_name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    country: DataTypes.STRING,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

console.log(phones === sequelize.models.phones); // true

await phones.sync();

const initSql = fs.readFileSync('db/init.sql').toString();

// HOWTO run a raw query
const [results] = await sequelize.query(initSql);
console.log(results);

const [results_two] = await sequelize.query('SELECT * FROM phones');
console.log(results_two);
