const router = require('express').Router();
const sequelize = require('../config/connection');
const { Liquor, User, Comment } = require('../models');

router.get('/', (req, res) => {
  Liquor.findAll({
    attributes: [
      'id',
      'name',
      'description',
      'date_created',
      'liquor_type',
    ],
    include: [
      {
        model: Comment,
        attributes: [
          'id',
          'name',
          'description',
          'liquor_type',
          'volume_size',
          'date_created',
        ],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })

    .then(dbLiquorData => {
      const liquors = dbLiquorData.map(liquor => liquor.get({ plain: true }));
      res.render('homepage', {
        liquors,
        loggedIn: req.session.loggedIn
      });
    })
    // if server error, then return error
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Render login page and if the user is logged in, redirect to the homepage
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Render the sign up page and if the user is logged in, redirect to the homepage
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

module.exports = router;