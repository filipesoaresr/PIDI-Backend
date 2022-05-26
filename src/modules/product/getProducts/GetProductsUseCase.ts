import { prisma } from '../../../database/prismaClient';


export class GetProductsUseCase {

    async execute() {

        try {
            const product = await prisma.product.findMany();
            return product
        }
        catch (err) {
            console.log(err)
        }
    }

}