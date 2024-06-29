const express=require('express');
const app=express();
const db=require('./db');


const bodyParser=require('body-parser');
app.use(bodyParser.json());


const MenuItem= require('./models/MenuItem'); 

app.get('/',function(req,res)
{
     res.send('Welcome to my hotel...How can i help u?');
})



const personRoute=require('./routed/personRoute');
const menuItemRoutes=require('./routed/menuItemRoutes');
app.use('/person',personRoute);
app.use('/menu',menuItemRoutes);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})