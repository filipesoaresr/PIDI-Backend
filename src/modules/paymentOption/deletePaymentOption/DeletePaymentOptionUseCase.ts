import { prisma } from '../../../database/prismaClient';

interface IDeletePayment {
    id_payment: string;
}

export class DeletePaymentUseCase {
    async execute({  id_payment }: IDeletePayment) {

        try {
            const result = await prisma.paymentOptions.delete({
                where: {
                    id: id_payment
                }
            });
            return result
        }
        catch (err) {
            console.log(err)
        }
    }
}