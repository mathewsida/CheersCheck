const router = require('express').Router();
const sequelize = require('../config/connection');
const { Liquor, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
// still not finished with this
// need to work on attributes, pulled from my MVC project as this will be a similar process

router.get('/', (req, res) => {
  Liquor.findAll({
    where: {
      user_id: req.session,user_id
    },
    attributes: [
      // Getting ID, Title, and timestamp from Liquor table
      'id',
      'title',
      'created_at',
      'liquor_text',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Comment,
        attributes: [
          'id',
          'comment_text',
          'created_at',
          'liquor_id',
          'user_id',
        ],
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