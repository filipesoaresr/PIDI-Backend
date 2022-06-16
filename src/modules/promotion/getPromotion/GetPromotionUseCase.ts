import { prisma } from '../../../database/prismaClient';


export class GetPromotionUseCase {

    async execute() {

        try {
            const promotion = await prisma.promotion.findMany(
                {include:{products:true}}
            );
            return promotion
        }
        catch (err) {
            console.log(err)
        }
    }

}