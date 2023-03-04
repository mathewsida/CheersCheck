const router = require('express').Router();
const { User, Liquor, Comment, Inventory } = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');

// get all liquors
router.get('/:id', (req, res) => {
    Inventory.findAll({
        where: {
            user_id: req.params.id,
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

// post liquor
// router.post('/', withAuth, (req, res) => {
//     Liquor.create({
//         name: req.body.name,
//         description: req.body.description,
//         user_id: req.session.user_id,
//     })
//         .then((dbLiquorData) => res.json(dbLiquorData))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

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
