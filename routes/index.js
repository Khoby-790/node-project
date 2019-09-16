
import { Router } from 'express';

const Route = Router();



//controller
//controller goes here

//middleware
//middleware goes here (if any)

//routes
//routes here\

Route.get('/',(req, res)=>res.json({name: "Emmanuel Baidoo"}));

module.exports = Route