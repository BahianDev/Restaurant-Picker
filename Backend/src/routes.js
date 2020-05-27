const express = require("express");

const routes =  express.Router();

const RestaurantController = require('./controllers/RestaurantController');

routes.get('/categories', RestaurantController.getCategories);
//routes.get('/images', TomatoController.getImages);

module.exports = routes;