const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api');

const app = express();

require('./db');
//middlewares
app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});