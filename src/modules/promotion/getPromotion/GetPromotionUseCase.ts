import { prisma } from '../../../database/prismaClient';


export class GetPromotionUseCase {

    async execute() {

        try {
            const promotion = await prisma.promotion.findMany(
                {
                    include:{products: true}
                }
            );
            return promotion
        }
        catch (err) {
            console.log(err)
        }
    }

    async executeSearch(promotion_name: string) {

        try {
            const promotion = await prisma.promotion.findMany(
                {   where: { 
                    name: {
                        contains: promotion_name,
                        mode: 'insensitive',
                    }
                },
                    include:{products: true}
                }
            );
            return promotion
        }
        catch (err) {
            console.log(err)
        }
    }

}