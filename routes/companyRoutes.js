const express = require('express');
const companyRouter = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

// define the route for adding a company
//private routes
companyRouter.post('/users/:userId/companies', auth.verifyToken, companyController.addCompany);
//public routes
companyRouter.get('/', companyController.getAllCompanies);

companyRouter.post('/', auth.verifyToken, auth.isAdmin, companyController.addCompany);

module.exports = companyRouter;