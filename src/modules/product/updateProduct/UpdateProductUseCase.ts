import { prisma } from '../../../database/prismaClient';

interface IProductUseCase {

    id_product: string;
    product_type: string;
    name: string;
    collection: string;
    date_created: Date;
    value: number;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    id_promotion?: string;
}


export class UpdateProductUseCase {

    async execute({
        id_product,
        product_type,
        name,
        collection,
        date_created,
        value,
        id_promotion,
        pp,
        p,
        m,
        g,
        gg
    }: IProductUseCase) {

        try {
            const product = await prisma.product.update({
                where: {
                    id: id_product
                },
                data: {
                    product_type,
                    name,
                    collection,
                    date_created,
                    value,
                    id_promotion,
                    pp,
                    p,
                    m,
                    g, 
                    gg
                }
            });
            return product
        }
        catch (err) {
            console.log(err);
        }

    }
}