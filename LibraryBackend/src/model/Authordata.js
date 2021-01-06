const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.y56k3.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewAuthorSchema = new Schema({
    authorId : Number,
    authorName : String,
    book : String,
    genre : String,
    country : String,
    price : Number,
    starRating :Number,
    imageUrl : String
});

var Authordata = mongoose.model('author', NewAuthorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Authordata;