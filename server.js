const path = require('path');
require('dotenv').config();

const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

// handlebars js engine instance with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'supersecretsecret',
  cookie: {
    // Session will automatically expire in 10 minutes
    expires: 100 * 60 * 1000
  },
  // false is typically recommended
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// sets up express app
const app = express();
const PORT = process.env.PORT || 3001;

// sets Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware for session object
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use(require('./controllers/'));

// connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});