    import express from "express";
import router from "./router.js";
import dotenv from "dotenv";
import cors from "cors";
import connection from "./connection.js";

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api",router);


connection().then(()=>{
    
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    })
    
    })
    .catch((error)=>{
        console.log(error);
    })