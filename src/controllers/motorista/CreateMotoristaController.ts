import { Request, response, Response } from "express";
import { CreateMotoristaService } from "../../services/motorista/CreateMotoristaService";

class CreateMotoristaController{

    async handle(req: Request, res:Response){
        const{nome,sobrenome, email,password, cpf, CNH,
            foto, ant_criminal, avaliacao, validade_cnh, detalhes_corridas,
            celular, valido}= req.body;


        const createMotoristaService = new CreateMotoristaService();

        const motorista =  await createMotoristaService.execute({
            nome, sobrenome, email, password, CNH,foto, ant_criminal, avaliacao, validade_cnh, detalhes_corridas, celular, valido
        });
        return res.json(motorista)
    }
}

export{CreateMotoristaController}