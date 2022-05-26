import { prisma } from '../../../database/prismaClient';



interface ICreateProduct {

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

export class CreateProductUseCase {

    async execute({
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
    }: ICreateProduct) {

        //Validar se o Produto existe
        try {
            const productExists = await prisma.product.findFirst({
                where: {
                    name: {
                        equals: name,
                        mode: 'insensitive',
                    }
                }
            });

            if (productExists) {
                throw new Error("Product already Exists!")
            }
        }
        catch (err) {
            console.log(err);
        }


        //Salvar o Produto
        try {

            const product = await prisma.product.create({

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