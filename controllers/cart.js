'use strict';
var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

module.exports = function (router) {
    router.get('/', function (req, res) {                
      // Get cart form session
      var cart = req.session.cart;
      var displayCart = {item:[],total:0}
      var total = 0;

      // Get total
      for(var item in cart){
        displayCart.item.push(cart[item]);
        total +=(cart[item].qty*cart[item].price);
      }
      displayCart.total = total;

      // render cart
      res.render('cart/index',{
        cart:displayCart
      })
    });

    router.post('/:id', function (req, res) {                
        Book.findOne({_id:req.params.id},function(err,book){
        	if (err) {
        		console.log(err);
        	}

        	var model = {
        		book:book
        	};

        	res.render('books/details',model )
        });
    });
};
