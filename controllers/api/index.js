const router = require('express').Router();
const userRoutes = require('./user-routes');
const liquorRoutes = require('./liquor-routes');
const commentRoutes = require('./comment-routes');

// path routes for api to use
router.use('/users', userRoutes);
router.use('/liquor', liquorRoutes);
router.use('/comments', commentRoutes);

module.exports = router;