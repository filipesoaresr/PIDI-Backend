import { prisma } from "../../../database/prismaClient";


export class GetUserUseCase {

    async execute() {

        try {
            const users = await prisma.user.findMany({
                select: {
                    name: true,
                    username: true,
                    password: false,
                    birth_date: true,
                    phone: true,
                    email: true,
                    cpf: true,
                    sex: true,
                    date_created: true,
                    role: true,
                }
            });

            return users;
        }
        catch (err) {
            console.error(err);
        }
    }
}