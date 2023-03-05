const router = require('express').Router();

const userRoutes = require('./user-routes');
const liquorRoutes = require('./liquor-routes');
// const commentRoutes = require('./comment-routes');
const inventoryRoutes = require('./inventory-routes');

// path routes for api to use
router.use('/users', userRoutes);
router.use('/liquor', liquorRoutes);
// router.use('/comments', commentRoutes);
router.use('/inventory', inventoryRoutes);

module.exports = router;
