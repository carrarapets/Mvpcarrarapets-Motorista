import { Request, response, Response } from "express";
import { CreateMotoristaService } from "../../services/motorista/CreateMotoristaService";

class CreateMotoristaController{

    async handle(req: Request, res:Response){
        const{nome, sobrenome, cpf, email, password, cnh, foto}= req.body;


        const createMotoristaService = new CreateMotoristaService();

        const motorista =  await createMotoristaService.execute({
        nome,sobrenome,cpf,email, password,foto,cnh
        });
        return res.json(motorista)
    }
}

export{CreateMotoristaController}