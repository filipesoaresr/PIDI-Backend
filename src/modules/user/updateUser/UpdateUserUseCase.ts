import { prisma } from '../../../database/prismaClient';


interface IUpdateUser {
    id_user: string;
    name?: string;
    username?: string;
    password?: string;
    phone?: string;
    email?: string;
}


export class UpdateUserUseCase {

    async execute({
        id_user,
        name,
        username,
        password,
        phone,
        email

    }: IUpdateUser) {

        try {
            const updateUser = await prisma.user.update({
                where: {
                    id: id_user
                },
                data: {
                    name,
                    username,
                    password,
                    phone,
                    email
                }
            });
            return updateUser
        }
        catch (err) {
            console.error(err);
        }
    }
}