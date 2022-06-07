import { prisma } from '../../../database/prismaClient';


export class GetOrderUseCase {

    async execute() {

        try {
            const order = await prisma.order.findMany();
            return order
        }
        catch (err) {
            console.log(err)
        }
    }

}