const express = require('express');

const Router = express.Router;

const dashboardRoutes = Router();

const {
    welcome
} = require('../controllers/home');

dashboardRoutes.get('/', welcome);

module.exports = dashboardRoutes;