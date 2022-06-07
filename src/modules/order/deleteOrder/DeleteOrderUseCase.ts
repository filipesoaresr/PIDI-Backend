import { prisma } from '../../../database/prismaClient';

interface IDeleteOrder {
    id_order: string;
}

export class DeleteOrderUseCase {
    async execute({ id_order }: IDeleteOrder) {

        try {
            const result = await prisma.order.delete({
                where: {
                    id: id_order
                }
            });
            return result
        }
        catch (err) {
            console.log(err)
        }
    }
}