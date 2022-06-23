import { prisma } from '../../../database/prismaClient';

interface Product {
    id: string;
}
interface ICreatePromotion {
    name: string;
    startDate?: Date;
    end_date?: Date;
    discount: string;
    products?: string[];
}


export class CreatePromotionUseCase {

    async execute({
        name,
        end_date,
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
             
            const promotion = await prisma.promotion.create({

                data: {
                    name,
                    end_date,
                    discount,
                    
                    
                }
            });

            const updateProduct = await prisma.product.updateMany({
                where: {
                    id: {
                        in: products 
                    }
                },
                data: {
                  id_promotion: promotion.id
                },
              })
            console.log(updateProduct)
            console.log("Promotion ID",promotion.id)
            return promotion
        }
        catch (err) {
            console.log(err);
        }
    }
}