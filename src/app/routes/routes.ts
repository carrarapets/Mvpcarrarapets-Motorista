import { Router, Request, Response } from "express";
import { CreateMotoristaController } from "../controllers/motorista/CreateMotoristaController";

const router = Router();

router.post('/createmotorista', new CreateMotoristaController().handle)
router.get('/home', (req: Request, res: Response) =>{
    return res.json({ok:true})
})
export {router};