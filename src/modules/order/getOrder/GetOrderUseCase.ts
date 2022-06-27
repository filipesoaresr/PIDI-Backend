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

    async executeSales(startDate: string, endDate: string) {

        try {
            const sales = await prisma.order.findMany({
                where: {
                    is_open: false,
                    date_submitted: {
                        lte: endDate,
                        gte: startDate
                    }
                },
                include:{
                    product_has_order:true,
                    user: true
                }
            });
            return sales
        }
        catch (err) {
            console.log(err)
        }
    }


    async executeSearch(startDate: string, endDate: string) {

        try {
            const orderResult = await prisma.order.findMany({
                where: {
                    is_open: true,
                    date_created: {
                        lte: endDate,
                        gte: startDate
                    }
                },
                include:{
                    product_has_order:true,
                    user: true
                }
            });
            console.log("ORDER", orderResult);
            return orderResult
        }
        catch (err) {
            console.log(err)
        }
    }

}