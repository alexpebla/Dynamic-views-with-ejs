const express = require ('express')
const path = require('path')
const app = express();
const mainRoutes = require('./routes/index')
const expressPort = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './public')))


app.listen(expressPort, () => {
  console.log('Servidor corriendo')
});

app.use(mainRoutes);