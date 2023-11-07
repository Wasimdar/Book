import express from  "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookmodel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

//middleware handling CORS POLICY
// Allow all origin with default of Cors
app.use(cors());
// Another Method for Allowing Origins
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET','POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('Welcome to MERN STACK Application');
});

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('APP connected to database');
        app.listen(PORT, ()=>{
            console.log(`Listening on Port ${PORT}...`);
        });
        
    })
    .catch((error)=>{
            console.log(error);
    });