import { prisma } from '../../../database/prismaClient';


export class GetProductsUseCase {

    async execute() {

        try {
            const product = await prisma.product.findMany(
                {
                    include:{promotion: true}
                }
            );
            return product
        }
        catch (err) {
            console.log(err)
        }
    }

    async executeSearch(product_name: string) {

        try {
            const product = await prisma.product.findMany(
                {   where: { 
                    name: {
                        contains: product_name,
                        mode: 'insensitive',
                    }
                },
                    include:{promotion: true}
                }
            );
            return product
        }
        catch (err) {
            console.log(err)
        }
    }


}

//equals: ,
//mode: 'insensitive',