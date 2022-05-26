import { prisma } from '../../../database/prismaClient';


export class GetPaymentOptionsUseCase {

    async execute() {

        try {
            const paymentOption = await prisma.payment_options.findMany();
            return paymentOption
        }
        catch (err) {
            console.log(err)
        }
    }

}