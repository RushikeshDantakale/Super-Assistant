const mongoose = require('mongoose');

const shopifyUserSchema = new mongoose.Schema({
    id : {
        type : Number,
        required : true
        },
    first_name : {
    type : String,
    required : true
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const ShopifyUser = mongoose.model("SHOPIFYUSER",shopifyUserSchema);



module.exports = ShopifyUser;