import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import { router } from './routes/routes';

const app = express();
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
        message: 'Erro no servidor'
    })
})

app.listen(3334, ()=> console.log("servidor online"))