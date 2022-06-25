import { prisma } from "../../../database/prismaClient";


export class GetUserUseCase {

    async execute() {

        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
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


    async executeSearch(user_name: string) {

        try {
            const user = await prisma.user.findMany(
                {   where: { 
                    name: {
                        contains: user_name,
                        mode: 'insensitive',
                    }
                }
            }
            );
            return user
        }
        catch (err) {
            console.log(err)
        }
    }

}