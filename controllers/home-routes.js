const router = require('express').Router();
const sequelize = require('../config/connection');
const { Liquor, User, Comment, Inventory } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    if (req.session.user_id !== undefined) {
        Inventory.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: ['inventory_id', 'liquor_id', 'user_id', 'favorite'],
            include: [
                {
                    model: Liquor,
                    required: true,
                    attributes: [
                        'name',
                        'description',
                        'type',
                        'volume',
                        'image',
                    ],
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        })
            .then((dbInventoryData) => {
                const inventory = dbInventoryData.map((inventory) =>
                    inventory.get({ plain: true })
                );
                console.log(inventory);
                // console.log(inventory[14].liquors);
                const resObj = { inventory };
                if (req.session.loggedIn) {
                    resObj.loggedIn = true;
                    resObj.username = req.session.username;
                    resObj.uid = req.session.user_id;
                }

                res.render('homepage', resObj);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        //     .then((dbLiquorData) => {
        //         const liquors = dbLiquorData.map((liquor) =>
        //             liquor.get({ plain: true })
        //         );
        //         res.render('homepage', {
        //             liquors,
        //             loggedIn: req.session.loggedIn,
        //         });
        //     })
        //     // if server error, then return error
        //     .catch((err) => {
        //         console.log(err);
        //         res.status(500).json(err);
        //     });
    } else {
        res.render('homepage', {
            loggedIn: false,
        });
    }
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
    if (req.session.user) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;
