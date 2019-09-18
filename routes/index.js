
import { Router } from 'express';

const Route = Router();



Route.get('/',(req, res)=>res.json({name: "Emmanuel Baidoo"}));

module.exports = Route