import { prisma } from '../../../database/prismaClient';


interface ICreatePaymentOption {
    name: string;
    flag?: string;
    installment?: string;
}


export class CreatePaymentOptionUseCase {

    async execute({ name, flag, installment }: ICreatePaymentOption) {

        //Validar se o PaymentOption existe
        try {
            const paymentOptionExists = await prisma.paymentOptions.findFirst({
                where: {
                    name: {
                        equals: name,
                        mode: 'insensitive',
                    }
                }
            });

            if (paymentOptionExists) {
                throw new Error("Payment Option already Exists!")
            }
        }
        catch (err) {
            console.log(err);
        }


        //Salvar o PaymentOption
        try {

            const paymentOption = await prisma.paymentOptions.create({

                data: {
                    name,
                    flag,
                    installment
                }
            });

            return paymentOption
        }
        catch (err) {
            console.log(err);
        }

    }
}