import { prisma } from '../../../database/prismaClient';


export class GetPaymentOptionsUseCase {

    async execute() {

        try {
            const paymentOption = await prisma.paymentOptions.findMany();
            return paymentOption
        }
        catch (err) {
            console.log(err)
        }
    }

}