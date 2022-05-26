import { prisma } from '../../../database/prismaClient';


interface IDeleteUser {
    id_user: string;
}

export class DeleteUserUseCase {

    async execute({ id_user }: IDeleteUser) {

        try {
            const result = await prisma.user.delete({
                where: {
                    id: id_user,
                }
            });
            return result;
        }
        catch (err) {
            console.log(err)
        }
    }
}