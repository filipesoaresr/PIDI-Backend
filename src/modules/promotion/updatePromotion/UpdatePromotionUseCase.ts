import { prisma } from '../../../database/prismaClient';


interface IUpdatePromotion {
    id_promotion: string;
    name?: string;
    startDate?: Date;
    endDate?: Date;
    discount?: string;
    productsInPromo?: [];
}


export class UpdatePromotionUseCase {

    async execute({
        id_promotion,
        name,
        startDate,
        endDate,
        discount,
        productsInPromo,
    }: IUpdatePromotion) {

        try {
            const promotion = await prisma.promotion.update({
                where: {
                    id: id_promotion
                },
                data: {
                    name,
                    startDate,
                    endDate,
                    discount,
                    productsInPromo
                }
            });
            return promotion
        }
        catch (err) {
            console.log(err);
        }

    }
}