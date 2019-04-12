const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

const playersList = JSON.parse(fs.readFileSync('players.json', 'utf-8'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/players/:playerName', (req, res) => {
  const { playerName } = req.params;

  // find in the playersList the object for who the name equals the playerName in the params

  const player = playersList.find(
    el => el.name.toLowerCase() === playerName.toLowerCase()
  );

  if (!player) res.send('Player not found!');
  else res.render('player', player);
});

app.get('/players', (req, res) => {
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
