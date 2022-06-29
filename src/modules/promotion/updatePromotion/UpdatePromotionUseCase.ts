import { prisma } from '../../../database/prismaClient';


interface IUpdatePromotion {
    id_promotion: string;
    name?: string;
    start_date: Date;
    end_date: Date,
    discount?: string;
    products?: Array<any>;
}

export class UpdatePromotionUseCase {

    async execute({
        id_promotion,
        name,
        start_date,
        end_date,
        discount,
        products,
    }: IUpdatePromotion) {

        console.log(products)
        try {
            const promotion = await prisma.promotion.update({
                where: {
                    id: id_promotion
                },
                data: {
                    name,
                    start_date,
                    end_date,
                    discount,
                    
                }
            });
        }
        catch (err) {
            console.log(err);
        }

        console.log(products)
        const updateProduct = await prisma.product.updateMany({
            where: {
                id: {
                    in: products 
                }
            },
            data: {
              id_promotion: id_promotion
            },
          })
            console.log(updateProduct)
            console.log("Promotion ID",id_promotion)
           
        }
        catch (err: any) {
            console.log(err);
        }
}

  