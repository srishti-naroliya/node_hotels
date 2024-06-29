const mongoose=require('mongoose');
const mongoURL='mongodb://localhost:27017/userinfo'
mongoose.connect(mongoURL)

const db=mongoose.connection;
db.on('connected',()=>
{
    console.log('connected to MongoDB server');
});

db.on('error',()=>
    {
        console.log('connection error');
});

module.exports=db;