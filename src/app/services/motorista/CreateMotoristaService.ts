import { Request, Response } from "express";
import prismaClient from "../../prisma/index"
interface MotoristaRequest{
    nome: string;
    sobrenome: string;
    email: string;
    password: string;
    cpf: string;
    cnh: string;
    foto: string;
   /* ant_criminal: string;
    avaliacao: string;
    validade_cnh: Date;
    detalhes_corrida: string;
    celular: string;
    rg:string;*/



}
class CreateMotoristaService{
    async execute({nome}:MotoristaRequest){
        if(!nome){
            throw new Error("email incorreto")
        }

        console.log(nome)
        return {nome: nome}
    }
}
export {CreateMotoristaService}