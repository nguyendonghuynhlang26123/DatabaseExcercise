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

app.get('/recipes', (req, res) => {
  let recipeController = require('./controllers/recipeController');
  recipeController.getAll().then((data) => {
    for (let index = 0; index < data.length; index++) {
      Object.assign(data[index], { isEven: index % 2 === 1 });
    }
    res.render('recipes', {
      author: 'Nguyen Dang Huynh Long - 18127136',
      list: data,
      n: 2,
    });
  });
});

app.get('/feature/:recipeId', async (req, res) => {
  let recipeController = require('./controllers/recipeController');
  recipeController.getOne(req.params.recipeId).then((data) => {
    res.render('features', {
      data: data,
      author: '18127269 - Nguyễn Thái Tân',
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
