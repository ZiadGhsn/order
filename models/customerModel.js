const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required:false,
    },

})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
