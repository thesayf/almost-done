// load the things we need
var mongoose = require('mongoose');
//var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
//var userSchema = mongoose.Schema({
//    name		: String,
//    email       : String,
//    password    : String,
//    salt        : String,
//	//crmId    	: String,
//    fromAddress : String,
//    toAddress   : String,
//    saveEmail   : Boolean,
//});

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    businessname: String,
    address: String,
    city: String,
    postcode: String,
    businesstype: String,
    firstname: String,
    lastname: String,
    mobile: String,
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
