const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')

dotenv.config()

//connect to mongodb
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true,useNewUrlParser:true},
).then(() => console.log('Connected to db successfully'))
.catch((err) => { console.error(err); });

app.listen(4000,()=>{
    console.log('Server running!')
})