const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js'); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const createRecipe = () =>
  Recipe.create({
    title: 'Tacos',
    level: 'Easy Peasy',
    ingredients: ['beans', 'avocado', 'tortilla'],
    cuisine: 'Tex-Mex',
    dishType: 'Dish',
    image:
      'https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2017/06/05162419/beef-tacos.jpg',
    duration: 5,
    creator: 'Juan'
  });

const insertRecipes = () =>
  Recipe.insertMany(data).then(docs => {
    docs.forEach(el => {
      console.log(el.title);
    });
  });

const updateRigatoniRecipe = () =>
  Recipe.findOneAndUpdate(
    { title: 'Rigatoni alla Genovese' },
    { duration: 100 }
  ).then(data => {
    console.log('Success!');
  });

const deleteCarrotCake = () =>
  Recipe.deleteOne({ title: 'Carrot Cake' }).then(data => {
    console.log('Success!');
  });

createRecipe()
  .then(insertRecipes)
  .then(updateRigatoniRecipe)
  .then(deleteCarrotCake)
  .then(() => {
    console.log('disconnected');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
  });
