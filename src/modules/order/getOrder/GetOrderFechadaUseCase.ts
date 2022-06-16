import { prisma } from '../../../database/prismaClient';


export class GetOrderFechadaUseCase {


    async execute(){
        try {
            const order = await prisma.order.findMany({
                where:{is_open:false},
                include:{product_has_order:true}
            });
            return order
        }
        catch (err) {
            console.log(err)
        }

    }

}