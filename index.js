const express = require('express');
const bodyparser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});