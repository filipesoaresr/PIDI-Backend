import { prisma } from '../../../database/prismaClient';

interface IUpdateOrder {
    id : string;
    date_created: Date;
    fk_id_payment_options: string;
    fk_id_user: string;
    is_open: boolean;
}

export class UpdateOrderUseCase {

    async execute({
        id,
        date_created,
        fk_id_payment_options,
        fk_id_user,
        is_open
    }: IUpdateOrder) {

        //Validar se o Pedido existe
        try {
            const orderExists = await prisma.order.findFirst({
                where: {
                    id: {
                        equals: id,
                        mode: 'insensitive',
                    }
                }
            });

            if (orderExists) {
                throw new Error("Order already Exists!")
            }
        }
        catch (err) {
            console.log(err);
        }


        //Fazer update do Pedido
        try {

            const order = await prisma.order.update({
                where:{
                    id: id,
                },
                data: {
                    date_created,
                    fk_id_payment_options,
                    fk_id_user,
                    is_open,
                    product_has_order:{
                        create:[
                            {
                                pp:1,
                                p:2,
                                m:1,
                                g:1,
                                gg:2,
                                fk_id_product:"aslçdk465",
                                hasPromotion:false,
                            }

                        ]
                    }
                }
            });

            return order
        }
        catch (err) {
            console.log(err);
        }

        
    }

    async executeSales(
    id: string,
    is_open: boolean,
    date_submitted: Date
    ) {
        try {
            const sale = await prisma.order.update({
                where: {
                    id: id
                },
                data: {
                    is_open: is_open,
                    date_submitted: date_submitted
                }
            });
            return sale
        }
        catch (err) {
            console.log(err);
        }
    }
}



