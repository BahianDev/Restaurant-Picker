const express = require("express");

const routes =  express.Router();

const RestaurantController = require('./controllers/RestaurantController');

routes.get('/id', RestaurantController.getIdLocation);
routes.get('/restaurantids', RestaurantController.getIdsRestaurant);
routes.get('/detail', RestaurantController.getRestaurantDetail);
routes.get('/images', RestaurantController.getImages);

module.exports = routes;