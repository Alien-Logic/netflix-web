import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from "../netflix-api/routes/UserRoute.js"

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://0.0.0.0:1/netflix",{
   useNewUrlParser: true,
   useUnifiedTopology: true, 
})
.then(()=>{
    console.log("DB Connected");

});

app.use("/api/user", router);

app.listen(5000, console.log("server started"));
