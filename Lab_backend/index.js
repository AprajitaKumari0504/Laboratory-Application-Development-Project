const express=require('express')
const mongoose=require('mongoose')
const port = 3000
const cors=require('cors')

const app=express();

const dbUrl='mongodb+srv://dbAprajita:Kalyani6@democluster.xscu3.mongodb.net/dbForTestJWT?retryWrites=true&w=majority'
mongoose.connect(
    dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err)=>{
        if(!err){
            console.log("DB connected Successfully");
        }
        else{
            console.log("DB not connected");
        }
    }     
)

//cors level middleware
app.use(cors())

const userRoutes=require('./routes/users')
//body parser middleware
app.use(express.urlencoded({extended:true}));

//json middleware
app.use(express.json());

//router level middleware

app.use('/users',userRoutes)

app.get('/error',(req,res)=>{
    res.status(500).send('something went wrong')
})


app.listen(port,()=>{
    console.log(`the server is listening on port ${port}`);
})



