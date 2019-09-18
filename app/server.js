const express = require('express');

require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
require('../app/config/db')(dbUrl);
// require('../app/models/user.model');
// require('../app/models/blog.nodel');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use('/',require('../routes/index'));

app.get('/hello',(req, res)=>{
    res.send("Emmanuel Baidoo")
})


app.listen(port, ()=> console.log(`server is running on ${port}`));