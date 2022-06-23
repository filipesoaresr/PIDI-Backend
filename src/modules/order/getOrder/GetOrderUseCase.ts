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

    async executeSales() {

        try {
            const sales = await prisma.order.findMany({
                where: {
                    is_open: false,
                },
                include:{
                    product_has_order:true,
                }
            });
            return sales
        }
        catch (err) {
            console.log(err)
        }
    }

}