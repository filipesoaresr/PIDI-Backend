import { prisma } from '../../../database/prismaClient';
import { hash } from 'bcrypt';


interface ICreateUser {
    name: string;
    username: string;
    password: string;
    birth_date: string;
    phone: string;
    email: string;
    cpf: string;
    sex: string;
    date_created: Date;
    role: string;


}

export class CreateUserUseCase {

    async execute({
        name,
        username,
        password,
        birth_date,
        phone,
        email,
        cpf,
        sex,
        date_created,
        role
    }: ICreateUser) {

        //Validar se o usuario existe
        try {
            const userExists = await prisma.user.findFirst({
                where: {
                    username: {
                        equals: username,
                        mode: 'insensitive',
                    }
                }
            });

            if (userExists) {
                throw new Error("User already Exists!")
            }
        }
        catch (err) {
            console.log(err);
        }
        //Criptografar a senha
        const hashPassword = await hash(password, 10);

        //Salvar o usuario 
        try {

            const user = await prisma.user.create({

                data: {
                    name,
                    username,
                    password: hashPassword,
                    birth_date,
                    phone,
                    email,
                    cpf,
                    sex,
                    date_created,
                    role
                }
            });

            return user
        }
        catch (err) {
            console.log(err);
        }

    }
}