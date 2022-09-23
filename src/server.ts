import express from 'express'; 
import cors from 'cors';
import { router } from './routes/routes';

const app = express();
app.use(cors())
app.use(express.json())
app.use(router);

app.get("/", (request, response) => {
    return response.json("hello word");

});
app.use((err, request, response)=>{
    // if(err instanceof Error){
    //     return response.status(400).json({
    //         error: err.message
    //     })
    // }
    // return response.status(500).json({
    //     status: 'error',
    //     message: 'Erro no servidor'
    // })
})

app.listen(3334, ()=> console.log("servidor online"))