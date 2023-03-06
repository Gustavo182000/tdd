const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/homeController')
const UserController = require('../controllers/userController')

router.get('/',HomeController.inicio);
router.get('/users',UserController.getUsers);
router.post('/users',UserController.setUsers);


module.exports = router