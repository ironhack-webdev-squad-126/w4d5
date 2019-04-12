const express = require('express');
const app = express();

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { body } = req;
  res.send(body);
});

app.listen(3000);
