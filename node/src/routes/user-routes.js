const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

router.get('/:id', controller.getUser);
router.get('/', controller.getUsers);
router.post('/', controller.createUser)

module.exports = router;