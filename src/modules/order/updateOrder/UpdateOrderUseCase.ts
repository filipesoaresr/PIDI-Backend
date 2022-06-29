import { prisma } from '../../../database/prismaClient';

interface IUpdateOrder {
    id : string;
    date_created?: Date;
    fk_id_payment_options?: string;
    fk_id_user?: string;
    is_open?: boolean;
    product_has_order: []
}

export class UpdateOrderUseCase {

    async execute({
        id,
        date_created,
        fk_id_payment_options,
        fk_id_user,
        is_open,
        product_has_order
    }: IUpdateOrder) {

        
     

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
                    product_has_order: {
                        create:  product_has_order
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



