import { Request, Response } from "express";
import prismaClient from "../../prisma/index"
interface MotoristaRequest{
    nome: string;
    sobrenome: string;
    email: string;
    password: string;
    CNH: string;
    foto: string;
    ant_criminal: string;
    avaliacao: string;
    validade_cnh: string;
    detalhes_corridas: string;
    celular: string;
    valido: boolean;
    



}
class CreateMotoristaService{
    async execute({nome,sobrenome, email,password, CNH, foto, ant_criminal, avaliacao, validade_cnh, detalhes_corridas, celular, valido}:MotoristaRequest){
        if(!email){
            throw new Error("email incorreto")
        }

        const verificaEmail =  await prismaClient.motorista.findFirst({
            where:{
                email: email
            }
        });
        if (verificaEmail) {
            throw new Error("Email ja cadastrado")
            
        }
        const motorista = await prismaClient.motorista.create({
            data:{
                nome,
                sobrenome,
                email,
                password,
                CNH,
                foto,
                ant_criminal,
                avaliacao,
                validade_cnh,
                detalhes_corridas,
                celular,
                valido

            }
        });
        
        return {motorista}
    }
}
export {CreateMotoristaService}