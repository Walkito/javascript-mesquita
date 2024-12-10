require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING,
  {useNewUrlParser: true, useUnifiedTopology: true}
).then(() => {
  app.emit('pronto');
})
.catch(error => console.error(error));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');

const helmet = require('helmet');
const csrf = require('csurf')
const meuMiddleware = require('./src/middlewares/middleware');

app.use(helmet);
app.use(express.urlencoded({ extends: true}));

app.use(csrf());

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'asaioanaocao3120j12',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUnitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);
app.use(meuMiddleware.csrfMiddleware)
app.use(meuMiddleware.checksCsrfError)
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
})
