const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var contactSchema = new mongoose.Schema({
    name:{
        type:String,

    
    },
    email:{
        type:String,
        required:true,
        
    },
    mobile:{
        type:String,
        required:true,
        
    },
    comment:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Contact', contactSchema);