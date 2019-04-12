const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/players', (req, res) => {
  const playersList = [
    {
      name: 'Russell',
      lastName: 'Westbrook',
      team: 'OKC',
      photo: '/images/westbrook.jpg'
    },
    {
      name: 'Kevin',
      lastName: 'Durant',
      team: 'GSW',
      photo: '/images/snake.jpg'
    },
    {
      name: 'Lebron',
      lastName: 'James',
      team: 'CLE',
      photo: '/images/lebron.jpg'
    },
    {
      name: 'Emanuel',
      lastName: 'Ginóbilli',
      team: 'SAS',
      photo: '/images/ginobili.jpg'
    },
    {
      name: 'Kyrie',
      lastName: 'Irving',
      team: 'BOS',
      photo: '/images/kyrie.jpg'
    },
    {
      name: 'Kobe',
      lastName: 'Bryant',
      team: 'LAL',
      photo: '/images/kobe.jpg'
    }
  ];

  res.render('players', {
    playersList: playersList
  });
});

app.get('/teams', (req, res) => {
  res.render('teams', {
    layout: false
  });
});

app.listen(3000);
