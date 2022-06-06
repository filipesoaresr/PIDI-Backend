import { prisma } from '../../../database/prismaClient';

interface ICreateProduct {

    product_type: string;
    name: string;
    collection: string;
    date_created: Date;
    value: number;
    pp?: number;
    p?: number;
    m?: number;
    g?: number;
    gg?: number;
    id_promotion?: string;
}


export class CreateProductUseCase {

    async execute({
        product_type,
        name,
        collection,
        date_created,
        value,
        pp,
        p,
        m,
        g,
        gg , 
        id_promotion
        
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
                    value,
                    pp,
                    p,
                    m,
                    g,
                    gg,  
                    id_promotion,
                    
                }
            });

            return product
        }
        catch (err) {
            console.log(err);
        }

        
    }
}



