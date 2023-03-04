const router = require('express').Router();
const { User, Liquor } = require('../../models');
const withAuth = require('../../utils/auth');
const bcrypt = require('bcrypt');

// get all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
    })
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get single user by id
// router.get('/:id', (req, res) => {
//   User.findOne({
//     attributes: { exclude: ['password'] },
//     where: {
//       id: req.params.id
//     },
//     include: [
//       {
//         model: Liquor,
//         attributes: [
//           'id',
//           'name',
//           'description',
//           'date_created',
//           'liquor_id',
//         ],
//       },
//       {
//         model: Comment,
//         attributes: [
//           'id',
//           'name',
//           'description',
//           'date_created',
//           'liquor_id',
//         ],
//         include: {
//           model: Liquor,
//           attributes: ['name']
//         }
//       }
//     ]
//   })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // add new user
// router.post('/signup', (req, res) => {
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password
//   })
//     .then(dbUserData => {
//       req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.email = dbUserData.email;
//         req.session.loggedIn = true;

//         res.json(dbUserData);
//       });
//     });
// });

// login route
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { username: req.body.username },
        });
        // if there is no user data

        if (!userData) {
            res.status(400).json({
                message: 'Incorrect username or password, please try again',
            });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        // if the password is NOT valid
        console.log(validPassword);
        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password, please try again',
            });
            return;
        }
        // Saves user info as logged in
        req.session.save(() => {
            req.session.user_id = userData.user_id;
            req.session.username = req.body.username;
            req.session.loggedIn = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// // logout existing user
// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// })

// // update existing user
// router.put('/:id', withAuth, (req, res) => {
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData[0]) {
//         res.status(404).json({ message: 'No user found with this id!' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// })

// // delete user
// router.delete('/:id', withAuth, (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbUserData => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id!' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
