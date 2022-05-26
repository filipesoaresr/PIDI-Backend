import { prisma } from '../../../database/prismaClient';

interface PromotionProduct {
    product_type: string;
    name: string;
    collection: string;
    date_created: Date;
    pp?: string
    p?: string
    m?: string
    g?: string
    gg?: string
    value: string
    promotion?: string

}

interface ICreatePromotion {
    name: string;
    startDate?: Date;
    endDate?: Date;
    discount: string;
    products?: PromotionProduct[];
}

export class CreatePromotionUseCase {

    async execute({
        name,
        startDate,
        endDate,
        discount,
        products,
    }: ICreatePromotion) {

        //Validar se a Promtion existe
        try {
            const promotionExists = await prisma.promotion.findFirst({
                where: {
                    name: {
                        equals: name,
                        mode: 'insensitive',
                    }
                }
            });

            if (promotionExists) {
                throw new Error("Promotion already Exists!")
            }
        }
        catch (err) {
            console.log(err)
        }

        //Salvar Promotion
        try {

            const promotion = await prisma.promotion.createMany({

                data: {
                    name,
                    startDate,
                    endDate,
                    discount,
                    products
                }
            });

            return promotion
        }
        catch (err) {
            console.log(err);
        }
    }
}