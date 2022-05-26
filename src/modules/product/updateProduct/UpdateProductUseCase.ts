import { prisma } from '../../../database/prismaClient';

interface IProductUseCase {

    id_product: string;
    product_type: string;
    name: string;
    collection: string;
    date_created: Date;
    pp?: string;
    p?: string;
    m?: string;
    g?: string
    gg?: string
    value?: string
    promotion?: string;
}


export class UpdateProductUseCase {

    async execute({
        id_product,
        product_type,
        name,
        collection,
        date_created,
        pp,
        p,
        m,
        g,
        gg,
        value,
        promotion
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
                    pp,
                    p,
                    m,
                    g,
                    gg,
                    value,
                    promotion
                }
            });
            return product
        }
        catch (err) {
            console.log(err);
        }

    }
}