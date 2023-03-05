const router = require('express').Router();
const { User, Liquor, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all liquors
router.get('/', (req, res) => {
    Liquor.findAll({
        attributes: ['liquor_id', 'name', 'volume', 'type'],
    })
        .then((dbLiquorData) => {
            res.json(dbLiquorData).status(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get liquor by ID
router.get('/:id', (req, res) => {
    Liquor.findOne({
        where: {
            liquor_id: req.params.id,
        },
        attributes: [
            'liquor_id',
            'name',
            'volume',
            'image',
            'type',
            'description',
        ],
    })
        .then((dbLiquorData) => {
            res.json(dbLiquorData).status(200);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

    // .then((dbLiquorData) => {
    //     const selectedLiquor = dbLiquorData.get({ plain: true });
    //     console.log(selectedLiquor);
    //     const resObj = { selectedLiquor };
    //     if (req.session.loggedIn) {
    //         resObj.loggedIn = true;
    //         resObj.username = req.session.username;
    //         resObj.uid = req.session.user_id;
    //         resObj.choice = true;
    //     }

    //     res.render('homepage', resObj);
    // })
    // .catch((err) => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
});

// post liquor
router.post('/', withAuth, (req, res) => {
    Liquor.create({
        name: req.body.name,
        description: req.body.description,
        user_id: req.session.user_id,
    })
        .then((dbLiquorData) => res.json(dbLiquorData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete liquor
router.delete('/:id', withAuth, (req, res) => {
    Liquor.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((dbLiquorData) => {
            if (!dbLiquorData) {
                res.status(404).json({
                    message: 'No liquor found with this id!',
                });
                return;
            }
            res.json(dbLiquorData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
