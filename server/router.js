const express = require('express');

const { error404, error500 } = require('./controllers/errors');
const { getPostsQuery } = require('./dataBase/queries');

const router = express.Router();
router.use('/postdata', (req, res) => {
  getPostsQuery().then((data) => res.json(data));
});

router.use(error404);
router.use(error500);

module.exports = router;
