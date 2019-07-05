const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const fruitRouter = require('./routes/fruit.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/fruit', fruitRouter);

app.listen(3000, error => {
  console.log(error || 'server is running on port 3000');
});
