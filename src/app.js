// run `node index.js` in the terminal
import express from 'express';
import '../db/db.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8999;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}/`)
);

/**
 * Create a standard handler and controller REST API
 * that return different levels of the query that we went through
 * 1. Route to get all sales
 * 2. Route to filter for iPhone 14s only
 * 3. Route to return the total sales and iPhone 14
 * 4. Route to return the percentage and percentage increase/decrease
 */

app.get('/', (_req, res) => res.send('This is a nodejs service'));
