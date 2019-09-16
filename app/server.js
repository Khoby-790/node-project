const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use('/',require('../routes/index'));

app.get('/hello',(req, res)=>{
    res.send("Emmanuel Baidoo")
})


app.listen(port, ()=> console.log(`server is running on ${port}`));