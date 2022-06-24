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

    async executeSearch(payment_option_name: string) {

        try {
            const payment = await prisma.paymentOptions.findMany(
                {   where: { 
                    name: {
                        contains: payment_option_name,
                        mode: 'insensitive',
                        }
                    }    
                }
            );
            console.log(payment);
            return payment
        }
        catch (err) {
            console.log(err)
        }
    }


}