const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const hbs = require('express-handlebars');
app.engine(
  'hbs',
  hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
  })
);

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', { author: 'Team12' });
});

app.get('/createTables', (req, res) => {
  let models = require('./models');
  models.sequelize.sync().then(() => {
    res.send('Tables created!');
  });
});

app.get('/recipes', (req, res) => {
  let recipeController = require('./controllers/recipeController');
  recipeController.getAll().then((data) => {
    console.log(data);
    res.render('recipes', {
      author: 'Nguyen Dang Huynh Long - 18127136',
      list: data,
      n: 2,
    });
  });
});

app.get('/featured', (req, res) => {
  res.render('features', { author: 'Tan' });
});

app.get('/demo', (req, res) => {
  let recipeController = require('./controllers/recipeController');
  recipeController.getOne(1).then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.get('/demot', (req, res) => {
  let directionController = require('./controllers/directionController');
  directionController.getAll().then((data) => {
    console.log(data);
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
