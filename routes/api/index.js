const router = require('express').Router();
const twitterRoutes = require('./twitterRoutes');

router.use('/twitter', twitterRoutes);

module.exports = router;