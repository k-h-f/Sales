// run `node index.js` in the terminal
import express from 'express';
import './db/db.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8999;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}/`)
);
