import { prisma } from '../../../database/prismaClient';


export class GetPromotionUseCase {

    async execute() {

        try {
            const promotion = await prisma.promotion.findMany();
            return promotion
        }
        catch (err) {
            console.log(err)
        }
    }

}