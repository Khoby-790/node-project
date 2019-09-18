import { Router } from 'express';
import HomeController from '../app/controllers/HomeController';
const Route = Router();



// Route.get('/',(req, res)=>res.json({name: "Emmanuel Baidoo"}));
Route.route('/')
    .get(HomeController.index);


module.exports = Route