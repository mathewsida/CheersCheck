const router = require('express').Router();
const { User, Liquor, Comment, Inventory } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all liquors
router.get('/:favorites', withAuth, (req, res) => {
    if (req.params.favorites) {
        Inventory.findAll({
            where: {
                favorite: true,
                user_id: req.session.user_id,
            },
            attributes: ['inventory_id', 'liquor_id', 'user_id', 'favorite'],
            include: [
                {
                    model: Liquor,
                    attributes: [
                        'liquor_id',
                        'name',
                        'description',
                        'type',
                        'volume',
                        'image',
                    ],
                },
            ],
        })
            .then((dbInventoryData) => res.json(dbInventoryData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    } else {
        Inventory.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: ['inventory_id', 'liquor_id', 'user_id', 'favorite'],
            include: [
                {
                    model: Liquor,
                    attributes: [
                        'liquor_id',
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
            .then((dbInventoryData) => res.json(dbInventoryData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    }
});

router.get('/favorites/', withAuth, (req, res) => {
    Inventory.findAll({
        where: {
            favorite: 'balls',
            user_id: req.session.user_id,
        },
        attributes: ['inventory_id', 'liquor_id', 'user_id', 'favorite'],
        include: [
            {
                model: Liquor,
                attributes: [
                    'liquor_id',
                    'name',
                    'description',
                    'type',
                    'volume',
                    'image',
                ],
            },
        ],
    })
        .then((dbInventoryData) => res.json(dbInventoryData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get liquor by ID
// router.get('/:id', (req, res) => {
//     Liquor.findOne({
//         where: {
//             id: req.params.id,
//         },
//         attributes: ['id', 'name', 'description', 'date_created', 'liquor_id'],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username'],
//             },
//             {
//                 model: Comment,
//                 attributes: [
//                     'id',
//                     'name',
//                     'description',
//                     'date_created',
//                     'liquor_id',
//                 ],
//                 include: {
//                     model: User,
//                     attributes: ['username'],
//                 },
//             },
//         ],
//     })
//         .then((dbLiquorData) => {
//             if (!dbLiquorData) {
//                 res.status(404).json({
//                     message: 'No liquor found with this id!',
//                 });
//                 return;
//             }
//             res.json(dbLiquorData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

//post liquor
router.post('/', withAuth, async (req, res) => {
    try {
        Inventory.create({
            liquor_id: req.body.liquor_id,
            favorite: req.body.favorite,
            user_id: req.session.user_id,
        })
            .then((dbInventoryData) => res.json(dbInventoryData))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    } catch (err) {
        res.status(400).json(err);
    }
});

// // delete liquor
// router.delete('/:id', withAuth, (req, res) => {
//     Liquor.destroy({
//         where: {
//             id: req.params.id,
//         },
//     })
//         .then((dbLiquorData) => {
//             if (!dbLiquorData) {
//                 res.status(404).json({
//                     message: 'No liquor found with this id!',
//                 });
//                 return;
//             }
//             res.json(dbLiquorData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

module.exports = router;
