const mongoose = require('mongoose');

const shopifyUserSchema = new mongoose.Schema({
    f_name : {
    type : String,
    required : true
    },
    l_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
})

const shopifyuser = mongoose.model("SHOPIFYUSER",shopifyUserSchema);



module.exports = shopifyuser;