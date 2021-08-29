const express = require('express');

const { error404, error500 } = require('./controllers/errors');

const router = express.Router();

router.use(error404);
router.use(error500);

module.exports = router;
