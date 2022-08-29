const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
const PORT = process.env.PORT || 4000
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('home');
})

app.post('/',(req,res)=>{
    let pass = req.body.password;
    console.log("pass : "+pass);
    let saltRounds = req.body.rounds;
    bcrypt.hash(pass, parseInt(saltRounds), function(err, hash) {
        res.render('hashed',{hash})
    });
})

app.listen(PORT,()=>console.log("Started"))