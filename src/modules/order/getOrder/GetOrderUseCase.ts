import { prisma } from '../../../database/prismaClient';


export class GetOrderUseCase {

    async execute() {

        try {
            const order = await prisma.order.findMany({include:{product_has_order:true}});
            return order
        }
        catch (err) {
            console.log(err)
        }
    }

    async executeOne(id: string) {

        try {
            const order = await prisma.order.findUnique({
                where: {
                    id: id,
                },
                include:{product_has_order:true}
            });
            return order
        }
        catch (err) {
            console.log(err)
        }
    }

}