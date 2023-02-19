const express = require('express')
const router = express.Router()
const f = require('../controller/controller')

router.route('/dishes')
.get(f.validateJWT, f.getDishes)
.post(f.validateJWT, f.addDishes)
router.route('/login')
.post(f.login)
router.route('/register')
.post(f.register)
router.route('/order/:id')
.post(f.validateJWT, f.addOrder)
.get(f.validateJWT, f.getOrders)

module.exports = router