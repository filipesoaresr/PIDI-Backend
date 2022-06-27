import { prisma } from '../../../database/prismaClient';

interface IUpdateOrder {
    id : string;
    date_created?: Date;
    fk_id_payment_options?: string;
    fk_id_user?: string;
    is_open?: boolean;
    pp?: number;
    p?: number;
    m?: number;
    g?: number;
    gg?: number;
}

export class UpdateOrderUseCase {

    async execute({
        id,
        date_created,
        fk_id_payment_options,
        fk_id_user,
        is_open,
        pp,
        p,
        m,
        g,
        gg
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



