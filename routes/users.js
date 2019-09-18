import { Router } from 'express';

const Route = Router();

//controllers
import HomeController from '../app/controllers/HomeController';


Route.route('/login')
    .get(HomeController.login);

Route.route('/register')
    .get(HomeController.register);

module.exports = Route