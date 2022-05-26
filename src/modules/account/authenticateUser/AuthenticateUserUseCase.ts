import { prisma } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateUser {
    username: string;
    password: string;
}


export class AuthenticateUserUseCase {
    async execute({ username, password }: IAuthenticateUser) {
        //Receber username, password


        //Verificar se username é cadastrado
        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })

        if (!user) {
            throw new Error("Username or password invalid!")
        }

        //Verificar se a senha corresponde ao username
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Username or password invalid!")
        }


        // Gerar o token
        const token = sign({ username }, "c07306ea3fb71acd0d09950ae8eb979c", {
            subject: user.id,
            expiresIn: "1d"
        });
        return {
            token,
        }
    }
}