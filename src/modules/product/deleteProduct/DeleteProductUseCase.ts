import { prisma } from '../../../database/prismaClient';

interface IDeleteProduct {
    id_product: string;
}

export class DeleteProductUseCase {
    async execute({ id_product }: IDeleteProduct) {

        try {
            const result = await prisma.product.delete({
                where: {
                    id: id_product
                }
            });
            return result
        }
        catch (err) {
            console.log(err)
        }
    }
}