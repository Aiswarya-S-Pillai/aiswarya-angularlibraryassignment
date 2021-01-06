const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.y56k3.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewSignupSchema = new Schema({
    name: String,
    email : String,
    username:String,
    password : String,
    confirmPassword : String,
    
});

var Signupdata = mongoose.model('signup', NewSignupSchema);                        

module.exports = Signupdata;