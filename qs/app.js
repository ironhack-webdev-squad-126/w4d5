const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/search', (req, res) => {
  const query = req.query;
  console.log(query);
  res.send(query);
});

app.listen(3000);
