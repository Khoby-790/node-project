import { Router } from 'express';
import HomeController from '../app/controllers/HomeController';
import BlogController from '../app/controllers/BlogContainer';



const Route = Router();



// Route.get('/',(req, res)=>res.json({name: "Emmanuel Baidoo"}));
Route.route('/')
    .get(HomeController.index)
    .post(BlogController.addPost);

Route.get('/delete/:id',BlogController.deleteBlog);    

module.exports = Route