//Mongoose Dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is Required"
    },
    date: {
        type: Date,
        default: Date.now,
        required: "Date is Required"
    },
    url: {
        type: String,
        required: "URL is Required",
        unique: true
    }
});

var Article = mongoose.model('Article', ArticleSchema);

// Export it for use elsewhere
module.exports = Article;