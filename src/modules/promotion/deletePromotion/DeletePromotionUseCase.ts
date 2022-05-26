import { prisma } from '../../../database/prismaClient';


interface IDeletePromotion {
    id_promotion: string;
}

export class DeletePromotionUseCase {

    async execute({ id_promotion }: IDeletePromotion) {

        try {
            const result = await prisma.promotion.delete({
                where: {
                    id: id_promotion
                }
            });
            return result
        }
        catch (err) {
            console.log(err)
        }
    }
}