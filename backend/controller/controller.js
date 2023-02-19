const model = require('../model/model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.getDishes = async(req, res)=>{
   let dishes =  await model.dishModel.find()
   res.status(200).json(dishes)
}
exports.addDishes = async(req, res)=>{
    await model.dishModel.insertMany(req.body)
    res.send('inserted')
}

exports.login = async(req, res)=>{
    // const user = await model.userModel.findOne({ "username": req.body.username })
    // if (user != null) {
    //     const results = bcrypt.compareSync(req.body.password, user.password)
    //     if (results) {
    //         const token = jwt.sign({ _id: user._id }, 'topsecret', {
    //             expiresIn: "2 minutes"
    //         })
    //         // res.cookie('token', token)
    //         res.status(200).json(user)
    //     }
    //     else {
    //         res.status(200).send(results)
    //     }
    // }
    // else if (user == null) {
    //     res.status(200).json(user)
    // }
}

exports.validateJWT = (req, res) => {
    // jwt.verify(req.cookies.token, 'topsecret', (err,data)=>{
    //     if(err){
    //         res.cookies('token','')
    //         res.status(500).json('Session is expired. Please login again.')
    //     }
        
        next()
    // })
}

exports.register = (req, res)=>{
    // req.body.password = bcrypt.hashSync(req.body.password, 10)
    // console.log(req.body.password)
    // model.userModel.create(req.body)
    // res.status(200).json(req.body)
}

exports.addOrder = async(req, res)=>{
    await model.userModel.findOneAndUpdate({_id: req.params.id}, {$push: {"orders":req.body}})
    res.json('added to orders')
}

exports.getOrders = async(req, res)=>{
    let user =  await model.userModel.findOne({_id: req.params.id})
    let orders = user.orders
    res.status(200).json(orders)
}
