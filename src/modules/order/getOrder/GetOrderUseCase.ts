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


    async executeSearch(date_created: string) {

        try {
            const order = await prisma.order.findMany(
                {   where: {  
                    date_created: date_created
                    },
                    include:{
                        product_has_order:true,
                        user: true
                    }
                },     
            );
            console.log(order)
            return order
        }
        catch (err) {
            console.log(err)
        }
    }

}