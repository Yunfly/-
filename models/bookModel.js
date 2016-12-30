'use strict';

var mongoose = require('mongoose');

var bookModel = function(){
	var bookSchema = mongoose.Schema({
		title:String,
		categeor:String,
		description:String,
		auth:String,
		publisher:String,
		price:Number,
		cover:String
	});
	// Shorten text
	bookSchema.methods.turnText = function(length){
		return this.description.substring(0,length);
	}

	return mongoose.model('Book',bookSchema)
}
 module.exports = new bookModel();