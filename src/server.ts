import express from 'express';
import {Request, Response, NextFunction} from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/routes';
const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
app.use(router);
app.get("/", (req, res) => {
    return res.json("hello word");

});
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Error no servidor'
    })
})

const port = process.env.PORT || 3334;
app.listen(port, ()=> console.log("Server up in "+port));