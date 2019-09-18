import { Router } from 'express';

const Route = Router();

//controllers
import HomeController from '../app/controllers/HomeController';
import AuthController from '../app/controllers/AuthController';


Route.route('/login')
    .get(HomeController.login);

Route.route('/register')
    .get(HomeController.register)
    .post(AuthController.register)

module.exports = Route