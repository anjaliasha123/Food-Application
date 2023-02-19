const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        housenum: {
            type: Number
        },
        streetName: {
            type: String
        },
        zip: {
            type: Number
        },
        city: {
            type: String
        },
        state: {
            type: String
        }

    },
    orders: [{
        dishes: [{
            dishName:{type: String},
            servings:{type: Number}
        }],
        datePlaced: {
            type: Date,
            default: new Date()
        },
        total: {
            type: Number
        },
        status: {
            type: String,
            default:"placed"
        }
    }]
})

const dishesSchema = mongoose.Schema({
    dish: {
        type: String
    },
    price: {
        type: Number
    },
    ingredients: [{ type: String }],
    pic: {
        type: String
    }
})

const userModel = mongoose.model('user', userSchema, 'users')
const dishModel = mongoose.model('dish', dishesSchema, 'dishes')
module.exports = { userModel, dishModel }